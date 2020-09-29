import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'




export default function App(){
    const [bounties, setBounties] = useState([])
    useEffect(() => {
        axios.get("http://localhost:9000")
        .then(res => {
            console.log("Bounties", res.data)
            setBounties(res.data)
        })
        .catch(error => console.log(error));
    },[])
    return (
        <div>
            {bounties.map(bounty => <Bounty {...bounty} key={bounty.firstName} />)}
        </div>
    )
    }
