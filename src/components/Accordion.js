import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (idx) => {
    console.log(idx);
    setActiveIndex(idx);
  };
  const renderedItems = items.map((item, idx) => {
    const active = idx === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(idx)} className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
