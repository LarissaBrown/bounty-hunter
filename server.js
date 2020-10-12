const express = require("express");
const app = express()
const morgan = require("morgan");
const path = require("path")
const mongoose = require('mongoose')



app.use(express.json());
app.use(morgan("dev"));

//Connect to DataBase
mongoose.connect('mongodb://localhost:27017/bounty-hunterdb',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false

    },
    () => console.log("connected to DB")
    
    )
//Routes
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use("/bounties", require("./routes/bountyRouter"));


//Error handler
app.use((err,req, res, next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, ()=> {
    console.log("The server is running on Port 9000")
});

