const { Schema, model } = require('mongoose');

const domainSchema = new Schema(
    {
        // YoutubeVideo:{
        //     type:String,
        //     default:""
        // },
    },
    {timestamps:true}
);
// userSchema.index({ service_location: "2dsphere" })
module.exports = model('domains',domainSchema);
