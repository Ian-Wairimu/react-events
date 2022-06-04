import React, { useState } from "react";

const ComplexSimpleForm = () => {
    const [fullName, setFullName] = useState(
        {
            fName: '',
            lName: ''
        }
    )
    const handleChange = (event) => {
        const { value, name } = event.target
        setFullName((prevValue) => {
            if(name === "fname"){
                return {
                    fName: value,
                    lName: prevValue.lName
                };
            }else if(name === "lname"){
                return {
                    fName: prevValue.fName,
                    lName: value
                }
            }
        })
    }
    return (
        <>
            <form>
                    <h1>Hi, {fullName.fName} {fullName.lName}</h1>
                    <input type="text" name="fname" onChange={handleChange} value={fullName.fname} placeholder="First Name" />
                    <br />
                    <br />
                    <input type="text" name="lname" onChange={handleChange} value={fullName.lname} placeholder="Last Name" />
                    <br />
                    <br />
                    <button type="submit" style={{backgroundColor: 'black', color: 'yellow'}}>Submit</button>
                </form>
        </>
    );
}
export default ComplexSimpleForm;