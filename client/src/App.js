import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'
import AddBountyForm from "./components/AddBountyForm"
import './styles.css'


export default function App(props){
    const [bounties, setBounties] = useState([])

    function getBounties() {
        axios.get("/bounties")
        .then(res => {
            console.log("Bounties", res.data)
            setBounties(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg));
    }

    function addBounty(newBounty){
        axios.post("/bounties",  newBounty)
        .then(res => {
            setBounties(prevBounties => [...prevBounties, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteBounty(bountyId){
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))})
            .catch(err => console.log(err))
    }
    function editBounty(updates, bountyId){
        axios.put(`/bounties/${bountyId}`, updates)
        .then(res => {
            setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId ? bounty : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    },[])

    
    return (
        <div>
            <div className="bounty-container">
                <AddBountyForm 
                submit={addBounty} 
                btnText="Add Bounty"/>
                {bounties.map(bounty => 
                <Bounty {...bounty} 
                key={bounty.firstName}
                deleteBounty={deleteBounty}
                editBounty={editBounty} />)}
            </div>
            <img src={require("./components/huntressImg.png")} className="huntressImg" alt="huntress"/>
        </div>
    )
    }
