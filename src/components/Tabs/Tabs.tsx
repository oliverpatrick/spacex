import React, { useState } from "react";
import "./Tabs.scss";

type TabsProps = {
  selected?: number;
  children: React.ReactElement<PanelProps>[];
};

const Tabs: React.FC<TabsProps> = ({ selected = 0, children }) => {
  const [activeTab, setActiveTab] = useState(selected);

  const handleChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul className="inline">
        {children.map((elem, index) => {
          const style = index === activeTab ? "selected" : "";
          return (
            <li
              className={style}
              key={index}
              onClick={() => handleChange(index)}
            >
              {elem.props.id}
            </li>
          );
        })}
      </ul>
      <div className="tab">{children[activeTab]}</div>
    </div>
  );
};

type PanelProps = {
  id: string;
  children: React.ReactNode;
};

const Panel: React.FC<PanelProps> = ({ id, children }) => {
  return <div id={id}>{children}</div>;
};

export { Tabs, Panel };
