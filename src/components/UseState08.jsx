import React from "react";
import { useState } from "react";
import Card from "./Card";
import "./style.css";

export default function UseState08() {
  const suit = ["♠", "♥", "♦", "♣"];
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const color = ["black", "red"];

  const [card1, setCard1] = useState({ number: number[0], suit: suit[0], color: color[0] });
  const [card2, setCard2] = useState({ number: number[0], suit: suit[1], color: color[1] });
  const [card3, setCard3] = useState({ number: number[0], suit: suit[2], color: color[1] });
  const [card4, setCard4] = useState({ number: number[0], suit: suit[3], color: color[0] });

  function pickACard(n) {

    if (n == "a") {
      const a = { ...card1 }
      a.number = number[Math.floor(Math.random() * 13)]
      a.suit = suit[Math.floor(Math.random() * 4)]
      if (a.suit === "♥" || a.suit === "♦") {
        a.color = color[1]
      } else {
        a.color = color[0]
      }
      setCard1(a)
    }
    if (n == "b") {
      const b = { ...card2 }
      b.number = number[Math.floor(Math.random() * 13)]
      b.suit = suit[Math.floor(Math.random() * 4)]
      if (b.suit === "♥" || b.suit === "♦") {
        b.color = color[1]
      } else {
        b.color = color[0]
      }
      setCard2(b)
    }
    if (n == "c") {
      const c = { ...card3 }
      c.number = number[Math.floor(Math.random() * 13)]
      c.suit = suit[Math.floor(Math.random() * 4)]
      if (c.suit === "♥" || c.suit === "♦") {
        c.color = color[1]
      } else {
        c.color = color[0]
      }
      setCard3(c)
    }
    if (n == "d") {
      const d = { ...card4 }
      d.number = number[Math.floor(Math.random() * 13)]
      d.suit = suit[Math.floor(Math.random() * 4)]
      if (d.suit === "♥" || d.suit === "♦") {
        d.color = color[1]
      } else {
        d.color = color[0]
      }
      setCard4(d)
    }
  }
  
  return (

    <>
      <h1> Pick a card</h1>
      <div className="displayCards">
        <div className="displayCards2">
          <Card number={card1.number} suit={card1.suit} color={card1.color} />
          <button className="cardBT" onClick={() => pickACard("a")} >Click A</button>
        </div>
        <div className="displayCards2">
          <Card number={card2.number} suit={card2.suit} color={card2.color} />
          <button className="cardBT" onClick={() => pickACard("b")} >Click B</button>
        </div>
        <div className="displayCards2">
          <Card number={card3.number} suit={card3.suit} color={card3.color} />
          <button className="cardBT" onClick={() => pickACard("c")} >Click C</button>
        </div>
        <div className="displayCards2">
          <Card number={card4.number} suit={card4.suit} color={card4.color} />
          <button className="cardBT" onClick={() => pickACard("d")} >Click D</button>
        </div>
      </div>

     


    </>
  )


}
