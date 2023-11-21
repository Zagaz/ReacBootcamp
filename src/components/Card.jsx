import React from "react";

export default function Card({ number, suit, color }) {

     number = (number === 1) ? "A" : number;
     number = (number === 11) ? "J" : number;
     number = (number === 12) ? "Q" : number;
     number = (number === 13) ? "K" : number;




     // map suits
     let suitColor = "midsuits " + color;
     let numberColor = "cardsign top " + color;


     return (
          <div className="card">
               <div className="cardsign top">
                    <div className={numberColor}>{number}</div>

               </div>
               <div className="cardsign mid">
                    <div className={suitColor}>{suit}
                    </div>
               </div>
               <div className="cardsign bottom">
                    <div className={numberColor} >{number}</div>
               </div>
          </div>
     );


}

