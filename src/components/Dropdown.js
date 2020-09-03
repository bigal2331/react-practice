import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, setColor, selectedColor }) => {
  const [open, setOpen] = useState(false);
  const myRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (myRef.current.contains(e.target)) return;
      setOpen(false);
    });
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selectedColor.value) return null;

    return (
      <div
        className={`item`}
        onClick={() => {
          setColor(option);
        }}
        key={option.value}
        value={option}
      >
        {option.label}
      </div>
    );
  });

  const onDropdownClick = () => {
    setOpen(!open);
  };
  const classes = {
    true: {
      key1: "ui selection dropdown visible active",
      key2: "menu visible transition",
    },
    false: { key1: "ui selection dropdown", key2: "menu" },
  };
  return (
    <div ref={myRef} className="ui form">
      <div className="field">
        <label className="label">Select Color</label>
        <div className={classes[open].key1} onClick={onDropdownClick}>
          <i className="dropdown icon"></i>
          <div className="text">{selectedColor.label}</div>
          <div className={classes[open].key2}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
