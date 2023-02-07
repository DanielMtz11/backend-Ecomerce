const authServices = require("../services/authServices");
const carServices = require("../services/carServices");
const transporter = require("../utils/mailer")

const register = async(req, res)=>{
    try {
        const user = req.body;
        const result = await authServices.register(user);
        if(result){
            const userIdcreated = await authServices.getId(result.email);
            await carServices.createCar(userIdcreated);
            res.status(201).json({Message: "user created"});
            await transporter.sendMail({
                from: "daniel.martinez.b11@gmail.com",
                to: result.email,
                subject: "confirmacion de email",
                html:'<h1> bienvenido a la API de ecomerce creada por daniel martinez</h1> <p>tienes que confirmar tu email</p> <p>has click en el siguiente <a href=# target="new_blank">enlance</a></p>' 
            })
        }
        else{
            res.status(400).json({Message:"something wrong"})
        }
    } catch (error) {
        res.status(400).json(error.message);
        
    }
    
};

const getUsers = async(req, res)=>{
    try {
        const result = await authServices.getU();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.Message);
    }
};

const login = async(req, res)=>{
    try {
        const {email, password} = req.body;
        // !email || !password ?
        if(!email ){
            res.status(400).json({
                error: "missing data" ,                   
                Message: "not email provided"})};
        
        if(!password){
            res.status(400).json({
                error: "missing data",
                Message: "not password provided"
            });
        };
            
        const result = await authServices.logIn({email, password});

            if(result.isValid){
                const {username, id, email} = result._user;
                const userData = {username, id, email} ;
                const token = authServices.genToken(userData);
                result._user.token = token;
                // // console.log(email);
                const carId = await carServices.getcarId(id);  
                console.log(`id del carrito--->${carId}`);
                // const carId = await carServices.findId()
                res.status(200).json({message: "logedd in!!"});
                
            }

            else{
                res.status(400).json({Message:"incorrect password"});

            }

    } catch (error) {
        res.status(400).json({Message:"something wrong"});
    }
};


module.exports = {register, getUsers, login }