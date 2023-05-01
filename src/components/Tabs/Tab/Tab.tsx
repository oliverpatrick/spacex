import React from "react";
import "../Tabs.scss";

type TabProps = {
  label: React.ReactNode;
  active: boolean;
  onClick: (label: React.ReactNode) => void;
};

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => {
  const handleClick = () => {
    onClick(label);
  };

  return (
    <div className={active ? "active tab" : "tab"} onClick={handleClick}>
      {label}
    </div>
  );
};

export default Tab;
