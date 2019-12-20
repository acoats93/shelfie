module.exports = {
    createProducts: (req, res) => {
        const db = req.app.get('db');
        const {product_name, price, image_url} = req.body;
        // console.log(req.body)

        db.createProducts([product_name,price,image_url])
        .then(res => res.sendStatus(200))
        .catch(res.status(404).json(console.log('sorry, im apparently not good at this...')))   

    },
    getProducts: (req, res) => {
        const db = req.app.get('db');

        db.getProducts()
        .then(product => res.send(200).json(product))
        .catch(res.status(404).json(console.log('sorry, im apparently not good at this...'))) 

    },
    deleteProducts: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.deleteProducts(id)
        .then(sendStatus(200))
        .catch(res.status(404).json(console.log('sorry, im apparently not good at this...')))   
    }

}

/* post man is just returning completely blank fields. not showing errors, not showing my catch statements. i'm lost and at this point
don't even know what to check anymore. im sorry. i just feel completely lost as to what to try. i tried changing servers, rewriting my code,
commenting stuff out, etc. i just feel completely defeated. its not like i haven't been putting the effort in either (in my mind). i follow along well in class,
have been reviewing all of our afternoon projects, and studying have been several hours a night. i just don't know what to do. 
*/