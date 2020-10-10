const express = require("express");
const app = express()
const morgan = require("morgan");
//const bounties = require("./routes/bountyRouter");
const {v4} = require("uuid")
const cors =  require("cors");
const path = require("path")
// const bounties = [
//     { firstName: "Jarjar", lastName: "Binks" , isLiving: true, bountyAmount: 9000, type: "Sith", _id: v4()},
//     { firstName: "Halo", lastName:"Vinix", isLiving: false, bountyAmount: 0, type: "Jedi", _id: v4()},
//     { firstName: "Valquir", lastName: "Chomax", isLiving: true, bountyAmount: 500000, type: "Jedi", _id: v4()}
// ]
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use("/bounties", require("./routes/bountyRouter"));

app.listen(9000, ()=> {
    console.log("The server is running on Port 9000")
});

// app.get("/", (req, res) => {
//     res.send(bounties)
// })
// app.get("/bounties", (req, res) => {
//     res.json(bounties)
// });