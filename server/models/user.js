
const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;
const userSchema = new Schema(
    {
        userName:{
            type:String,
           default:""
        },
        email:{
            type:String,
            default:""
        },
        password:{
            type:String,
            default:"pass@123"
        },
        type:{
            type:String,
            default:null
        },
        // is_delete:{
        //     type:Boolean,
        //     default:false
        // },
    },
    {timestamps:true}
);

// userSchema.index({ service_location: "2dsphere" })
module.exports = model('users',userSchema);
