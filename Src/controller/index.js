const userModule = require('../Module/UserSchema.js')


module.exports.add_user= async(req,res) =>{
    console.log(req,"req-----"    )
    const {email,password} = req.body;
    try {
        const user = await userModule.create({
            email,
            password
        });
        res.status(200).send({
            status:"success",
            message:"User Created Successfully",
            data:user
        });
    } catch (error) {
        res.status(500).send({
            status:"Error",
            error:error.message
        });
    }
}