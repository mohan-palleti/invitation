import React from "react";
import CountdownTimer from "./CountDown";
import { Details } from "./Details";

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
      <div>
        <CountdownTimer />
      </div>
      <Details />
    </div>
  );
};
