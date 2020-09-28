import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'




export default function App(){
    const [bounties, setBounties] = useState([])
    useEffect(() => {
        axios.get("/bounties")
            .then(res => console.log('hello'))
        // .then(res => {
        //     console.log(res.data)
        //     setBounties([
                
        //         { firstName: "Halo", lastName:"Vinix", isLiving: false, bountyAmount: 0, type: "Jedi"},
                
        //     ])
        // })
        // .catch(err => console.log(err))
    },[])
    return (
        <div>
            <h2>Hello</h2>
            {bounties.map(bounty => <Bounty {...bounty} key={bounty.firstName} />)}
        </div>
    )
    }
