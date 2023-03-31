const Industry = require('../models/industries');

const getIndustries = async (req,res) => {

    try {
      console.log("industries")
        let industries = await Industry.find({});
        return res.status(200).send({ status: 200, success:true, data: { industries } });
    } catch (error) {
      return res.status(500).json({
        message: error.message ? error.message : 'Something went wrong',
      });
    }
    
};
  
module.exports = {
    getIndustries
}