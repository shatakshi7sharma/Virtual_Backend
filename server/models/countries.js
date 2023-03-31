
const { Schema, model } = require('mongoose');

const countrySchema = new Schema(
    {
        // YoutubeVideo:{
        //     type:String,
        //     default:""
        // },
    },
    {timestamps:true}
);
// userSchema.index({ service_location: "2dsphere" })
module.exports = model('countries',countrySchema);
