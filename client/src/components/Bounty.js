import React, {useState} from "react"
import AddBountyForm from "./AddBountyForm"

export default function Bounty(props){
    const {firstName, lastName, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
          { !editToggle ?
          <>
          <h1>{firstName} {lastName}</h1>
          <h2>{type}</h2>
          <button 
            className="delete-btn"
            onClick={() => props.deleteBounty(_id)}>
            Delete
          </button>
          <button 
            className="edit-btn"
            onClick={()=> setEditToggle(prevEditToggle=> !prevEditToggle)}>
            Edit
          </button>
          </>
          :
          <>
          <AddBountyForm 
            firstName={firstName}
            lastName={lastName}
            type={type}
            btnText="Submit Edit"
            submit={props.editBounty}
            />
            <button
              onClick={()=> setEditToggle(prevEditToggle => !prevEditToggle)}>
              Close
            </button>
            </>
          }
        </div>
    )
}
