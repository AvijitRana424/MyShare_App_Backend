const express = require("express");

const app = express();
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(cors({
   origin:"*",
   methods:"GET,POST,DELETE,PUT"
}));
    
app.use(express.json());

//databse connection
const connectDB = require("./config/db");
connectDB();

//template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


///rouer define
const postRouter = require("./routes/files");
app.use("/api/files", postRouter);
app.use("/files", require('./routes/show'));
app.use("/files/download", require('./routes/download'));



app.listen(PORT, ()=>{
    console.log(`Server is listing on port ${PORT}`);
});