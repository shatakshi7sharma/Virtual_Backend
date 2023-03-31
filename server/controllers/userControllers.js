const User = require('../models/user');
const { comparePassword } = require('../services/encryptDecrypt');
const { generateAccessToken } = require('../services/helperFunctions');

const login = async (req, res) => {
  console.log("inside login")
  const {email,password} = req.body;

  if(!email || !password){
      return {error: "Must provide email and password"}
  }

  const user = await User.findOne({email});

  if(!user){
      return res.status(400).json({
        message: "Invalid email or password"
      });
  }
  try{
      let matched = await comparePassword(password, user.password)
      if(!matched){  
        return res.status(400).json({
          message: "Must provide correct password"
        });
    }
      if(matched){
        const accessToken =  generateAccessToken(user._id);
        console.log("accessToken",accessToken, user.type)
        let data = {accessToken, userType: user.type};
        return res.status(200).send({ status: 200, data, success : true,message: "User successfully logged in." });

      }
   
  } catch (error) {
    return res.status(500).json({
      message: error.message ? error.message : 'Something went wrong',
    });
  }
};

module.exports = {
  login
}