import React from "react";

import "./BackgroundImage.scss";

interface IBackgroundImageProps {
  imageSrc: string;
  imageAlt: string;
  height: string | number;
}

function BackgroundImage({
  imageSrc,
  imageAlt,
  height,
}: IBackgroundImageProps) {
  return (
    <img
      className="background-image"
      src={imageSrc}
      alt={imageAlt}
      height={height}
      // style={{ objectPosition: "center", transform: "scale(1.7)" }}
    />
  );
}

export default BackgroundImage;
