import React from "react";
import { textSplitter } from "../../utils/textSplitter";
import GradientOverlay from "../GradientOverlay/GradientOverlay";
import { GradientColorScheme } from "../../utils/gradientEnum";

import "./Slide.scss";
import SlideButton from "../SlideButton/SlideButton";
import SlideWrapper from "./SlideWrapper/SlideWrapper";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

interface ISlideProps {
  image?: string;
  imageAlt?: string;
  imageHeight?: string | number;
  text: string;
  gradientHeight: string | number;
  gradientColor: GradientColorScheme;
}

const SlideSection = ({ text }: { text: string }) => {
  let slideStyleTwo = <div className="divider" />;

  return (
    <section className="slide-section">
      <h1 className="slide-text">{textSplitter(text)[0]}</h1>
      <h1 className="slide-text">{textSplitter(text)[1]}</h1>
      {/* {slideStyleTwo} */}
      <SlideButton onClick={() => console.log("clicked")} />
    </section>
  );
};

function RulerBorder() {
  function Measurement() {
    return (
      <div className="metre">
        <div className="inch" />
        <div className="inch" />
        <div className="inch" />
      </div>
    );
  }

  return (
    <div className="ruler-border">
      <Measurement />
      <Measurement />
      <Measurement />
      <Measurement />
      <Measurement />
    </div>
  );
}

function Slide({
  image,
  imageAlt,
  imageHeight,
  text,
  gradientHeight,
  gradientColor,
}: ISlideProps) {
  return (
    <SlideWrapper>
      {image && imageAlt && imageHeight && (
        <BackgroundImage
          imageSrc={image}
          imageAlt={imageAlt}
          height={imageHeight}
        />
      )}
      <GradientOverlay height={gradientHeight} colorScheme={gradientColor} />
      {/* <SlideSection text={text} /> */}

      {/* <section style={{ zIndex: 3 }}> */}
      {/* <h2></h2> */}
      {/* <div className="divider"></div> */}
      {/* <p>
          Our Colombian Ambassador started by diving into the swimming pools
          before becoming a true legend of his sport. Orlando began cliff diving
          in 1995 and became a professional cliff diver in 2000. He won 9 cliff
          diving championships and set 2 world records in his entire career
          before retiring in 2019. He has always been doing incredible
          performances and is one of the only cliff divers who got a perfect 10
          during a cliff diving competition in 2000.
        </p> */}
      {/* </section> */}
    </SlideWrapper>
  );
}

export default Slide;