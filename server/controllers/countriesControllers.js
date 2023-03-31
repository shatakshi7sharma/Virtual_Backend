const Country = require('../models/countries');

const getCountries = async (req,res) => {
console.log("getCountries")
    try {
        let countries = await Country.find({});
        return res.status(200).send({ status: 200,success:true, data: { countries } });
    } catch (error) {
      return res.status(500).json({
        message: error.message ? error.message : 'Something went wrong',
      });
    }
  };
  
  module.exports = {
    getCountries
  }