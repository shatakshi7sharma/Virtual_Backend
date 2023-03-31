
const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const videoSchema = new Schema(
    {
        No:{
            type:String,
           default:""
        },
        Title:{
            type:String,
           default:""
        },
        Category:{
            type:String,
            default:""
        },
        Domain:{
            type:String,
            default:""
        },
        YoutubeVideo:{
            type:String,
            default:""
        },
    },
    {timestamps:true}
);
// userSchema.index({ service_location: "2dsphere" })
module.exports = model('Videos',videoSchema);
