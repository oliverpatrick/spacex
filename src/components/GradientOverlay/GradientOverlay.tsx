import React from "react";
import { GradientColorScheme } from "../../utils/gradientEnum";

import "./GradientOverlay.scss";

interface IGradientOverlayProps {
  height: string | number;
  colorScheme: GradientColorScheme;
}

const gradientClassSelector = (colorScheme: string) => {
  console.log("hit");

  switch (colorScheme) {
    case GradientColorScheme.BlueToTeal:
      return "gradient-overlay-one";
    case GradientColorScheme.BlueToLightBlueToOceanBlue:
      return "gradient-overlay-two";
    case GradientColorScheme.DarkBlueToOceanBlue:
      return "gradient-overlay-three";
    case GradientColorScheme.GradientBackground:
      return "gradient-overlay-four";
    default:
      return "";
  }
};

function GradientOverlay({ height, colorScheme }: IGradientOverlayProps) {
  console.log(gradientClassSelector(colorScheme));

  return (
    <div
      className={gradientClassSelector(colorScheme)}
      style={{ height: height }}
    />
  );
}

export default GradientOverlay;
