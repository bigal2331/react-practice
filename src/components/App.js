import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Accordion from "./Accordion";
import DropDown from "./Dropdown";
import Route from "./Route";
import Translate from "./T";
import Header from "./Header";

const items = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" }
];
const App = (props) => {
  const [selectedColor, setColor] = useState(items[0]);
  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <SearchBar />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a color"
          setSelected={setColor}
          selected={selectedColor}
          options={items}
        />
      </Route>
    </div>
  );
};

export default App;
