const userModule = require('../Module/UserSchema.js')


module.exports.add_user= async(req,res) =>{
    console.log(req.body,"req-----"    )
    const { username,email,password} = req.body;
    try {
        const User = await userModule.create({
            username,
            email,
            password
        });
        res.status(200).send({
            status:"success",
            message:"User Created Successfully",
            data:User
        });
    } catch (error) {
        res.status(500).send({
            status:"Error",
            error:error.message
        });
    }
}

module.exports.login= async (req, res) => {
    console.log("req from login=>",req.body);
    const {username, password} = req.body;
    try {
        console.log("This is user=>")

      const user = await userModule.findOne({username: username});
    
      console.log("This is user=>", user)
  if(user){
    
    res.status(200).send({
        status:"success",
        message:"User Created Successfully",
        data:user
    });
  }else{
    res.status(400).json("wrong credentials!")
  }
      
    } catch (err) {
      res.status(500).json(err);
    }
  };
  

