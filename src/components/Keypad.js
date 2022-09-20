// Code Keypad Component Here
import React from 'react';

function Keypad() {
    function handleChange(e){
        console.log(`${e.target.name}...`)
    }
    return (
        <div>
            <input
                type="password"
                name= "Entering password"
                onChange={handleChange}
            />
        </div>
    )
}

export default Keypad;