const Domain = require('../models/domains')

const getDomains = async (req,res) => {
console.log("getDomains")
    try {
        let domains = await Domain.find({});
        return res.status(200).send({ status: 200,success:true, data: { domains } });
    } catch (error) {
      return res.status(500).json({
        message: error.message ? error.message : 'Something went wrong',
      });
    }
  };
  
  module.exports = {
    getDomains
  }