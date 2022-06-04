import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState('')
    const [heading, setHeading] = useState('')

    const handleChange = (event) => {
        console.log(event.target.value);
        setName(event.target.value)
    }
    const handleClick = () => {
        setHeading(name)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome, {heading}</h1>
                    <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>
                    <button type="submit" style={{backgroundColor: 'black', color: 'yellow'}} onClick={handleClick}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;