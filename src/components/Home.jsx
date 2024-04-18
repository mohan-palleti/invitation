import React from "react";
import CountdownTimer from "./CountDown";
import { Details } from "./Details";
import cartoonWeddding from "../assets/weddingcartoon.png";
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export const Home = () => {
  return (
    <div>
      <div className="Titlecard">
        <h2>Mohan weds Navya</h2>
        <img
          src="https://readme-typing-svg.herokuapp.com?font=Great+Vibes&amp;color=75b8f7&amp;size=30&amp;lines=You Are Invited To Our Wedding;"
          style={{
            maxWidth: "100%",
            marginTop: "10px",
          }}
        ></img>
      </div>
      <div className="imageBox">
        <img src={cartoonWeddding} alt="cartoonweddingimg" />
      </div>
      <div>
        <CountdownTimer />
      </div>
      <Details />
      <Confetti
  drawShape={ctx => {
    ctx.beginPath()
    for(let i = 0; i < 7; i++) {
      const angle = 0.35 * i
      const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
      const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
      ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.closePath()
  }}
/>
    </div>
  );
};
