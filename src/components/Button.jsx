import React from 'react';


export default function Button({
     description,
     calc
}
     
) {
     return (
          <button onClick={calc}>{description}</button>
     )
}

// Path: src/components/UseState05.jsx