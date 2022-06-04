import React, { useState } from "react";
// import "./style/app.module.css";

const App = () => {
    const [heading, setHeading] = useState('')
    const [mouseOver, setMouseOver] = useState(false)

    const handleClick = () => {
        setHeading('Submitted')
    }
    const handleMouseOver = () => {
        setMouseOver(true)
    }
    const handleMouseOut = () => {

        setMouseOver(false)
    }

    return (
        <>
            <div className="container">
                <h1>{heading}</h1>
                <input type="text" placeholder="What's your name?" />
                <button style={{backgroundColor: mouseOver ? "black" : "white", border: 'none', color: 'yellow'}} onClick={handleClick} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>Submit</button>
            </div>
        </>
    );
}
export default App;