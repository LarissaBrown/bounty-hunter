import React, {useState } from 'react'


export default function AddBountyForm(props){
    const initInputs = {
        firstName: props.firstName || "", 
        lastName: props.lastName || "", 
        type: props.type || ""
    }
    console.log(props)
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        console.log(inputs)
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChange}
                    placeholder="First Name"/>
             <input type="text"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"/>
            <input type="text"
                    name="type"
                    value={inputs.type}
                    onChange={handleChange}
                    placeholder="Type"/>
            <button>{props.btnText}</button>
        </form>
    )
}