import React from "react"

export default function Bounty(props){
    const {firstName, lastName, type} = props
    return (
        <div>
          <h1>Name:{firstName} {lastName}</h1>
          <h2>{type}</h2>
        </div>
    )
}
