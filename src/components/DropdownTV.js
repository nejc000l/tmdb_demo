import React, { useState } from "react";
import { serviceDropdown2 } from "./data/NavItems";

import "./style/Dropdown.css";

function DropdownTv() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown2.map((item) => {
          return (
            <li key={item.id}>
              <li
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </li>
            </li>
          );
        })}
      </ul>







    </>
  );
}

export default DropdownTv;