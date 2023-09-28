const mongoose = require('mongoose');
const dbconnection = async() =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/portf',{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            family: 4,
        });
        console.log("MongoDb Connection Succesfull");
    } catch (error) {
        console.error("Error Connecting MongoDB ",error);
    }
}
module.exports = dbconnection;