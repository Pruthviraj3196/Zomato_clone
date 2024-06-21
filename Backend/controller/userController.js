import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user 

const loginUser = async(req, res) => {
    const {email, password} = req.body;
    try { 
        const user = await userModel.findOne({email});
        
        
        if (!user) {
            return res.json({
                success:false,
                message:"User Doesnot exists"
            })
        }

        
        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.json({
                success:false,
                message:"Enter wrong Password or userID"
            })
        }

        const token = createToken(user._id);
        res.json({
            success:true,
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
    }
}

// creating token jwt 

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRETE)
}
 
// registeruser 

const registerUser = async (req,res) => {
    const {name, email, password} = req.body;
    try {
        const exits = await userModel.findOne({email});
        if(exits){
            return res.json({
                success:false,
                message:"User Already Exits"
            })
        }

        if (!validator.isEmail(email)) {
            return res.json({
                success:false,
                message:"Please use Valid email id"
            }) 
        }

        if (password.length<8) {
            return res.json({
                success:false,
                message:"please enter a 8 Digits Password"
            }) 
        }
        // hashing the password 

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const User = await newUser.save();
        const token = createToken(User._id);
        
        res.json({
            success:true,
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
    }
}

export {loginUser, registerUser};