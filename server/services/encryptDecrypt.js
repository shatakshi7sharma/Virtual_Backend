const bcrypt = require('bcryptjs');

const encryptPassword = async (password) =>{
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      return hash;
}

const comparePassword = async (password ,hash) =>{
        let val = await bcrypt.compare(password, hash); 
        return val
}
// encryptPassword("Test@123").then((val)=>{console.log(val)})


// console.log(comp())
module.exports ={
    encryptPassword,
    comparePassword
}