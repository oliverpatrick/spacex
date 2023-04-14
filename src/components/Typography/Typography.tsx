import React, { ReactNode } from "react";

interface ITypographyProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: ReactNode;
}

/**
 *
 * Returns the type of text element returned
 * @param type
 * Returns the text within the element
 * @param children
 * @returns
 */

const Typography: React.FC<ITypographyProps> = ({ type, children }) => {
  switch (type) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    case "h5":
      return <h5>{children}</h5>;
    case "h6":
      return <h6>{children}</h6>;
    case "p":
      return <p>{children}</p>;
    default:
      throw new Error(`Unsupported Typography type: ${type}`);
  }
};

export default Typography;
