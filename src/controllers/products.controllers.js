const Products_Services = require('../services/products_Services');

    const createProduct = async(req, res)=>{
        try{
            const product = req.body;
            const result = await Products_Services.newProduct(product);
            res.json(result);
        }
        catch(error){
            res.status(400).json(error.message);
        }
    };

    const getProducts = async(req, res)=>{

        try{
            const result = await Products_Services.showProducts();
            res.json(result);
        }
        catch(e){
            res.status(400).json(e.message);
        }
    }


    module.exports ={
        createProduct,
        getProducts
    }