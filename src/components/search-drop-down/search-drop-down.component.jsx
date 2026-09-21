import { useState } from "react";
import { SelectOptions } from "./search-drop-down.styles";

const SearchDropdown = ({ handleSelect, select }) => {
  return (
    <SelectOptions
      onChange={handleSelect}
      style={{ height: "30px", backgroundColor: "#e0e0e0" }}
    >
      {/* <option value="">All Categories</option> */}
      <option value="batman">Batman</option>
      <option value="superman">Superman</option>
      <option value="wonder woman">Wonder Woman</option>
      <option value="the flash">The Flash</option>
      <option value="aquaman">Aquaman</option>
      <option value="green lantern">Green Lantern</option>
      <option value="justice league">Justice League</option>
      <option value="dc comics">DC Comics</option>
    </SelectOptions>
  );
};

export default SearchDropdown;
