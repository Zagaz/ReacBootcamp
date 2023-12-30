import React from 'react';
import "./Button.scss";


export default function Button({
     description,
     calc,
     style
}
     
) {
     return (
          <button className={style} onClick={calc}>{description}</button>
     )
}

// Path: src/components/UseState05.jsx