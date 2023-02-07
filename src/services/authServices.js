
const bcrypt = require('bcrypt');
const models = require('../models')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const {users} = models;
const {car} = models;

// const models =initModels(db);

require('dotenv').config;
class authServices{
    static async register(_user){
        try {
            const result = await users.create(_user);
            return result;
        } catch (error) {
            throw error;
            
        }
    }

    static async getU(){
        try {
            const result = await users.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }


    static async getId(email){
        try{
            const result = await users.findOne({where:{email}})
            return result.id;
        }
        catch(e){
            throw e;
        }
    }


    static async logIn(credentials){
        try {
            const {email, password} = credentials;
            const _user = await users.findOne({where: {email}});                             
            if(_user){
                const isValid = bcrypt.compareSync(password,  _user.password); // true
                // console.log(`password:${password}  passUser:${_user.password}`);
                // console.log(`is: ${isValid}`)
                return isValid ? {isValid, _user}: {isValid};
            }
        } catch (error) {
            throw error;
        }
    }

    static genToken(userData) 
    {
        try {
        const token = jwt.sign(userData, process.env.JWT_SECRET,{
            expiresIn: "10m",
            algorithm: "HS512"
        }); 

        console.log(token);
        return token;     
        } catch (error) {
            throw error;
        }
    }

   
}

module.exports = authServices