const models = require("../models")

const {product} = models;

class Products_Services{

    static async newProduct(_product){
        try{
            const result = await product.create(_product);
            return result;
        }
        catch(e){
            throw e;
        }
    };

    static async showProducts()
    {
        try{
            const result = await product.findAll();
            return result;
        }
        catch(e){
            throw e;
        }
    }

}

module.exports = Products_Services;