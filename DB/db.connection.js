const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const connection = async() =>{
	try{
	     const conn = await mongoose.connect('mongodb://localhost:27017/virtualDashboard',
	      {
		  useNewUrlParser: true,
		  useUnifiedTopology: true,		
	      }
	    )
		
	console.log("database connected successfully!")
	}catch(err){
		console.log("err in connection",err)
	}
}

module.exports = connection;
