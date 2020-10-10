const express = require("express");
const app = express()
const morgan = require("morgan");
const path = require("path")

app.use(express.json());
app.use(morgan("dev"));
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

