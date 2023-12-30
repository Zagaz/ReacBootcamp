import React from "react";

function Ship ({key,captain, ship}) {
    return (
        <div key = {key}>
            <br />  
        <h2>This is the USS:{ship}</h2>;
        <h3>Captain: {captain}</h3>
        <hr />
        </div>
    )
}

export default Ship;