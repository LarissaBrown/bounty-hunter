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
    res.status(200)
    res.send(bounties)
})



//Get One 
bountyRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty){
        const error = new Error("The item was not found")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
    
})
//Get by Type
bountyRouter.get("/search/type", (req, res, next) => {
    const type = req.query.type
    const filteredBounties = bounties.filter(bounty => bounty.type === type)
    if(!type) {
        const error = new Error("You must provide a type")
        res.status(500)
        return next(error)
    }
    res.status(200).send(filteredBounties)
})
//Post One
bountyRouter.post("/", (req, res)=> {
    const newBounty = req.body
    newBounty._id = v4()
    bounties.push(newBounty)
    res.status(201).send(newBounty)
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
    res.status(201).send(updatedBounty)
})
module.exports = bountyRouter 