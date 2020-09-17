const express = require ("express")
const app = express()
const uuid = require("uuid/v4")



app.use(express.json())


const bounties = [
    { firstName: "Jarjar", lastName: "Binks" , isLiving: true, bountyAmount: 9000, type: "Sith", _id: uuid()},
    { firstName: "Halo", lastName:"Vinix", isLiving: false, bountyAmount: 0, type: "Jedi", _id: uuid()},
    { firstName: "Valquir", lastName: "Chomax", isLiving: true, bountyAmount: 500000, type: "Jedi", _id: uuid()}
]

app.get("/bounties", (req, res)=> [
    res.send(bounties)
])

app.post("/bounties", (req, res)=> {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} to the database`)
})

app.listen(9000, ()=> {
    console.log("The server is running on Port 9000")
})