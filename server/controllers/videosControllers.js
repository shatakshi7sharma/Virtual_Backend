const User = require('../models/user');
const Video = require('../models/videos');
const { readWriteCsv } = require('../services/readCSV');

const getVideos = async (req,res) => {
console.log("getVideos")
    try {
        let videos = await Video.find({});
        return res.status(200).send({ status: 200, success:true, data: { videos } });
    } catch (error) {
      return res.status(500).json({
        message: error.message ? error.message : 'Something went wrong',
      });
    }
  };
  
  module.exports = {
    getVideos
  }