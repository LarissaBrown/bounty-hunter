const express = require ("express")
const bountyRouter = express.Router()
const {v4} = require("uuid")


const bounties = [
    { firstName: "Jarjar", lastName: "Binks" , isLiving: true, bountyAmount: 9000, type: "Sith", _id: v4()},
    { firstName: "Halo", lastName:"Vinix", isLiving: false, bountyAmount: 0, type: "Jedi", _id: v4()},
    { firstName: "Valquir", lastName: "Chomax", isLiving: true, bountyAmount: 500000, type: "Jedi", _id: v4()}
]
//Get All
bountyRouter.get("/", (req, res)=> {
    res.send(bounties)
})



//Get One 
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})
//Get by Type
bountyRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredBounties = bounties.filter(bounty => bounty.type === type)
    res.send(filteredBounties)
})
//Post One
bountyRouter.post("/", (req, res)=> {
    const newBounty = req.body
    newBounty._id = v4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} to the database`)
})

//Delete One
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty!")
})

//Put or Update One
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})
module.exports = bountyRouter 