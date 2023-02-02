
// const initModels = require('../models/init-models')
// const db = require("../utils/database");
// const user = require('../models/user');
const bcrypt = require('bcrypt');
const models = require('../models')
// const jwt  = require('jsonwebtoken');

const {user} = models
// const models =initModels(db);

require('dotenv').config;
class authServices{
    static async register(_user){
        try {
            const result = await user.create(_user);
            return result;
        } catch (error) {
            throw error;
            
        }
    }

    static async getU(){
        try {
            const result = await user.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async logIn(credentials){
        try {
            const {email, password} = credentials;
            const _user = await user.findOne({where: {email}});
            if(_user){
                const isValid = bcrypt.compareSync(password,  _user.password); // true
                console.log(`password:${password}  passUser:${_user.password}`);

                console.log(`is: ${isValid}`)
                return isValid ? {isValid, _user}: {isValid};
            }

            // return {isValid : false}
        } catch (error) {
            throw error;  
        }
    }

    // static genToken(userData)
    // {
    //     try {
    //     const token = jwt.sing(userData, process.env.JWT_SECRET,{
    //         expiresIn: "10m",
    //         algorithm: "HS512"
    //     }); 
    //     return token;     
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}

module.exports = authServices