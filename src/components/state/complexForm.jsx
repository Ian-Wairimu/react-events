// handling complex state with react
import React, { useState } from "react";

const ComplexForm = () => {
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const handleFChange = (event) => {
        setFName(event.target.value);
    }
    const handleLChange = (event) => {
        setLName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleClick = () => {
        setFirstName(fname);
        setLastName(lname);
    }
    return(
        <>
            <form onSubmit={handleSubmit} >
                    <h1>Welcome, {firstName} {lastName}</h1>
                    <input onChange={handleFChange} type="text" value={fname} placeholder="First Name" />
                    <br />
                    <br />
                    <input onChange={handleLChange} type="text" value={lname} placeholder="Last Name" />
                    <br />
                    <br />
                    <button type="submit" style={{backgroundColor: 'black', color: 'yellow'}} onClick={handleClick}>Submit</button>
                </form>
        </>
    );
}
export default ComplexForm