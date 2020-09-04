import React, { useState } from "react";
// import SearchBar from "./SearchBar";
// import DropDown from "./Dropdown";
import Translate from "./Translate";

const items = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" }
];
const App = (props) => {
  const [selectedColor, setColor] = useState(items[0]);

  return (
    <div className="ui container">
      {/* <SearchBar /> */}
      {/* <DropDown
        setColor={setColor}
        selectedColor={selectedColor}
        options={items}
      /> */}
      <Translate />
    </div>
  );
};

export default App;
