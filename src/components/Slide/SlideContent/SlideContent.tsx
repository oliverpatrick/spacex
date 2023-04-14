import React from "react";

interface ISlideContentProps {
  title: string;
  paragraph: string;
}

const SlideContent = ({ title, paragraph }: ISlideContentProps) => {
  return (
    <div className="slide-section">
      <div className="ruler-border" />
      <h1 className="slide-heading">{title}</h1>
      <div className="divider" />
      {paragraph && <p className="slide-paragraph">{paragraph}</p>}
    </div>
  );
};

export default SlideContent;
