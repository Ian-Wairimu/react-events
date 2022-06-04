import React, { useState } from "react";

const FormSpread = () => {
    const [contact, setContact] = useState(
        {
            fName: '',
            lName: '',
            email: ''
        }
    );
    const handleChange = (event) => {
        const { value, name } = event.target;

        setContact((prevDet) => {
            return {
                ...prevDet,
                [name]: value
            }
        })
    }
    return (
        <>
            <h1>
                Hello {contact.fName} {contact.lName}
            </h1>
            <p>{contact.email}</p>
            <form>
                <input name="fName" onChange={handleChange} value={contact.fName} placeholder="First Name" />
                <br />
                <br />
                <input name="lName" onChange={handleChange} value={contact.lName} placeholder="Last Name" />
                <br />
                <br />
                <input name="email" onChange={handleChange} value={contact.email} placeholder="Email" />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    );
}

export default FormSpread;