
const Models = require("../Models/User");
const bcrypt = require('bcryptjs');
const sendToken = require('../utils/jwtToken');
const jwt = require("jsonwebtoken");
const JWT_SECRET = "murliisgoody";
const { body, validationResult } = require("express-validator");

let success = true
//Updaating the User table with FIrebase database
//Delete the table database

const CreateNewUser = async(req,res)=> {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      success=false
      return res.status(400).json({ success,errors: errors });
    }
    try {
      let user = await Models.findOne({ email: req.body.email });
      if (user) {
        success=false
        return res
          .status(400)
          .json({ success,error: "Sorry my bad email alrready exist" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // console.log(req.body);
      user = await Models.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(jwtData)

      // .then((user) => res.json(user));
      res.json({ success, authToken });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
}

const LoginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success=false
      return res.status(400).json({ success,errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await Models.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Sorry your bad enter correct things" });
      }
      const passCompare = await bcrypt.compare(password, user.password);

      if (!passCompare) {
        return res
          .status(400)
          .json({ error: "Sorry your bad enter correct things" });
      }

      const data = {
        user: {
          user_id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({success, authToken });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
}
//Adding the New Stock in the warehousestock table
//Doubt

const AddStock = async(req,res)=>{
    try{
        const{user_id} = req.params;
        const NewStock = Models.insertMany(req.body, (err, results)=>{res.json(results)});
        try{
            res.status(200).json(NewStock);
        }
        catch(e){
            res.status(400).json({e : e.message});
        }
    }
    catch (err) {
        res.status(400).json({err : err.message});
    }
}
//
// //Get all the data related to Stock of the particular User_id
//
const GetAllData = async(req,res)=>{
    try {
        const Stocks = {hello : "helllo"}
        // const {user_id} = req.params;
        // const Stocks = Models.find({user_id: user_id});
        // res.status(200).json(Stocks);
        console.log("hello")
    }
    catch (err){
        res.status(400).json({err : err.message});
    }
    res.json({msg : "All the Stock is shown"});
}


const dispatchedStock = async(req,res)=>{
    try{
        const {user_id, user_name} = req.params;
        const Dispatched = await Models.findById(user_id).select('dispatched')
    }
    catch(err){

    }
}

module.exports = {CreateNewUser,
    GetAllData, AddStock, dispatchedStock, LoginUser};

