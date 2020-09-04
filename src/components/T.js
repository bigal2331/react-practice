import React, { useState } from "react";
import DropDown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Afrikanns", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

const Translate = () => {
  const [selectedLang, setSelectedLang] = useState(options[0]);
  const [term, setTerm] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text</label>
          <input value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>
      </div>
      <DropDown
        label="Select a Language"
        selected={selectedLang}
        setSelected={setSelectedLang}
        options={options}
      />
      <h3 className="ui header">Output</h3>
      {term ? <Convert languange={selectedLang.value} text={term} /> : null}
    </div>
  );
};

export default Translate;
