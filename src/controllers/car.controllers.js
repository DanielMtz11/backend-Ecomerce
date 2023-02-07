const { product, productInCar } = require("../models");
const carServices = require("../services/carServices");


const getcars = async(req, res)=>{
    try{
        const result = await carServices.showCars();
        res.json({Message: "All cars:",
                    result,})
    }
    catch(e){
        res.status(400).json(e.message);
    }
}

const deleteCar = async(req, res)=>{
    try{
        const {id} = req.body
        const result = await carServices.deletCar(id);
        res.json(result)
    }
    catch(e){
        res.status(400).json(e.message);
    }
}

const addToCar = async (req, res)=>{
    try{
        const productToAdd = req.body;
        const result = await carServices.add(productToAdd);

        const {productId, quantity} = result;
        const productResult = await product.findByPk(productId);
        const {price} =productResult;
        const quantity_price = (price * quantity);
        await productInCar.update({price:quantity_price},{where:{
            price: null
        }});
        res.json({message: "added product"});
    }
    catch(e){
        res.status(400).json(e.message);
    }
}

const getProductsIncar = async(req, res)=>{
    try{
        const {id} = req.params;
        const result = await carServices.getProducts_car(id);
        // console.log(result);
        res.json(result);

    }
    catch(e){
        res.status(400).json(e.message);
        }
}


module.exports = {getcars, deleteCar,addToCar,getProductsIncar}