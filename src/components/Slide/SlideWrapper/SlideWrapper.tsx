import React, { ReactNode } from "react";

import "./SlideWrapper.scss";

interface ISlideWrapperProps {
  children: ReactNode;
}

function SlideWrapper({ children }: ISlideWrapperProps) {
  return <div className="slide-wrapper">{children}</div>;
}

export default SlideWrapper;
