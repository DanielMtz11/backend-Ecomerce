const {car, users, productInCar, product} = require("../models")

class carServices{  
    static async createCar(user_id){
        try{
                const result = await car.create({totalPrice: 0, userId: user_id});
                return result;
        }
        catch(e){
            throw e;
        }
    };

    static async showCars(){
        try{
            const result = await car.findAll({include:{
                model:productInCar,
                as: "productInCar"
            }});
            return result;
        }
        catch(e){
            throw e;
        }   
    }

    static async deletCar(id){
        try{
            const result = await car.destroy({where:{id}});
            return result;
        }
        catch(e){
            throw e;
        }   
    }

    static async getcarId (id){
        try{
            const result = await car.findOne({where:{id}})
            return result.id;
        }
        catch(e){
            throw e;
        }
    }

    static async add (productToAdd){
        try{
            const result = await productInCar.create(productToAdd);
            return result;
        }
        catch(e){
            throw e;
        }
    }

    static async getProducts_car (id){
        try{
            // console.log(await productInCar.findAll({where:{id}}))

            const result = await users.findAll({where: {id},
                                                attributes:["username"],
                                                include: {
                                                    model: car,
                                                    as: "car",
                                                    attributes:["totalPrice"],
                                                    include:{
                                                        model: productInCar,
                                                        as: "productInCar",
                                                        attributes:["quantity","price"],
                                                        include:{
                                                            model: product,
                                                            as: "product",
                                                            attributes:["name"]
                                                        }
                                                    }
                                                }
                                            });
                                            
            // console.log(  await productInCar.findAll({}));
    
            // productInCar.findAll().then( instances => {
            //         instances.forEach(instance => {
            //             console.log(instance.dataValues);
            //         });
                

            // });
                
            return result;
            
        }
        catch(e){
            throw e;
    }

    }  
    




}

module.exports = carServices;
