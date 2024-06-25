const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebbok"
//const mongoURI = "mongodb://localhost27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

// const connectToMongo = () => {
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully");
//     })
// }
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to Mongo Successfully!');
  } catch (error) {
    console.error(error);
  }
};


module.exports = connectToMongo;