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

//i'm sorry. i know i can do better than this. i let myself get overwhelmed and couldn't get past my mental block for way too long.