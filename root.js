const User=require('./models/user');
const root={
 
    getUsers:async()=>{
        return await User.find();
    },
  
    registerUser:async(args)=>{
        const newUser=new User(args.user);
       return await newUser.save();
        
    }

   }

    

module.exports=root;