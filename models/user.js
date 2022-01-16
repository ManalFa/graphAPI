const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
   firstName:{
        type:String,
       required:true,        
    },
    lastName:{
        type:String,  
        required:true,  
    },
    email:{
        type:String,   
        required:true, 
    },
    address:{
        type:String,   
    },
    dateBirth:{
        type:String,   

    },
    phoneNumber:{
        type:String,   
    },
    gender:{
        type:String,   
    },
    job:{
        type:String
    },
    companyName: {
        type:String
    }


});
module.exports=mongoose.model('user',userSchema);