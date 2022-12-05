require("dotenv").config();
const mongoose = require("mongoose");


function connectDB() {
    //database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true , useUnifiedTopology: true });

      const connection = mongoose.connection;
      connection.on('error', function cb() {
        console.log('Error when connecting to db ');
       });
      
       connection.once('open', function cb() {
        console.log('Successfully connected to database ');
       });
}

module.exports = connectDB;