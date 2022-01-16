const mongoose=require('mongoose');
const specSchema=new mongoose.Schema({
   idJob:{
        type:String,
       required:true, 
    },

    nameSpec:{
        type:String,
       required:true,        
    },

});
module.exports=mongoose.model('speciality',specSchema);