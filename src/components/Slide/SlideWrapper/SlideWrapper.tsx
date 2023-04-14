import React, { ReactNode } from "react";
import SlideButton from "../../SlideButton/SlideButton";
import "./SlideWrapper.scss";

interface ISlideProps {}

const SlideWrapper = ({}: ISlideProps) => {
  return (
    <div className="slide-wrapper">
      <img
        className="background-image"
        src="./images/bg-slide-3.png"
        alt=""
        height="70%"
      />
      <div className="gradient-overlay" style={{ height: "60%" }} />
      <div className="slide-section">
        <div className="ruler-border" />
        <h1 className="slide-heading">ORLANDO DUQUE</h1>
        <div className="divider" />
        <p className="slide-paragraph">
          Our Colombian Ambassador started by diving into the swimming pools
          before becoming a true legend of his sport. Orlando began cliff diving
          in 1995 and became a professional cliff diver in 2000. He won 9 cliff
          diving championships and set 2 world records in his entire career
          before retiring in 2019. He has always been doing incredible
          performances and is one of the only cliff divers who got a perfect 10
          during a cliff diving competition in 2000.
        </p>
      </div>
      <SlideButton onClick={() => console.log("clicked")} />
    </div>
  );
};

export default SlideWrapper;
