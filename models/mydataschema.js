const mongoose = require('mongoose');
const schema =mongoose.schema
const artichleschema =new schema(
    {username:string}
)
const mydata=mongoose.model("mydataaa",artichleschema)
module.exports=mydata
