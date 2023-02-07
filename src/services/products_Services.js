const models = require("../models")
const {product} = models;
const {users} = models;
const {productInCar} = models;

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
            
            const result = await product.findAll({
                attributes:{exclude: ["id","userId"]},
                include:{
                    model:users,
                    as: "seller",
                    attributes:["username"],
                }
            });
            return result;
        }
        catch(e){
            throw e;
        }
    }


    static async deleteProduct(id){
        try{
            const result = await product.destroy({where:{id}});
            return result;
        }
        catch(e){
            throw e;
        }
    }


}

module.exports = Products_Services;