import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'




export default function App(){
    const [bounties, setBounties] = useState([])
    useEffect(() => {
        axios.get("/bounties")
        .then(res => {
            console.log(res.data)
            setBounties([res.data])
        })
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h2>Hello</h2>
            {bounties.map(bounty => <Bounty {...bounty} key={bounty.firstName} />)}
        </div>
    )
    }
