const jwt = require('jsonwebtoken');

var generateAccessToken = (userId) => {
    return jwt.sign({userId: userId},`${process.env.JWT_SECRET_KEY}`,{expiresIn: '8h'});
}

var decodeJwtToken = (condition) => {

    const payload = jwt.verify(condition,`${process.env.JWT_SECRET_KEY}`,(err,data)=>{
        if(err){
            const error = Boom.unauthorized('You must be logged in');
            return {error: error.output};
        }else{
            return data;
        }
    })
    return payload;
}

module.exports = {
    generateAccessToken,
    decodeJwtToken
}