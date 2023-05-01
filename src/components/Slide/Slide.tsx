import React, { ReactNode } from "react";
import SlideButton from "../SlideButton/SlideButton";
import "./Slide.scss";

interface ISlideProps {
  id: number;
  name: string;
  imageSrc: string;
  description: string;
}

const Slide = ({ id, name, imageSrc, description }: ISlideProps) => {
  return (
    <div className="slide-wrapper">
      <img className="background-image" src={imageSrc} alt="" height="70%" />
      <div className="gradient-overlay" style={{ height: "60%" }} />
      <div className="slide-section">
        <div className="ruler-border" />
        <h1 className="slide-heading">{name}</h1>
        <div className="divider" />
        <p className="slide-paragraph">{description}</p>
      </div>
      <SlideButton onClick={() => console.log("clicked")} />
    </div>
  );
};

export default Slide;
