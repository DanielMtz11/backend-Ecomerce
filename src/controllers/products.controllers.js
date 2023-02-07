const Products_Services = require('../services/products_Services');

    const createProduct = async(req, res)=>{
        try{
            const product = req.body;
            // const {sellerId} =  req.body;
            // const resultSeller = await  Products_Services.searchSeller(sellerId);
            const result = await Products_Services.newProduct(product);

            // console.log(seller);

            res.json({result});
        }
        catch(error){
            res.status(400).json(error.message);
        }
    };
    
    const getProducts = async(req, res)=>{

        try{

            // const {seller} = req.body
            const result = await Products_Services.showProducts();
            // console.log(seller);
            res.json(result);
        }
        catch(e){
            res.status(400).json(e.message);
        }
    };

    const deleteProducts = async(req, res)=>{
        try{
            const {id} = req.body
            const result = await Products_Services.deleteProduct(id);

            res.json("deleted product");
        }
        catch(e){
            res.status(400).json(e.message);
        }
    }





    module.exports ={
        createProduct,
        getProducts,
        deleteProducts,
        
    }