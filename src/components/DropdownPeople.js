import React, { useState } from "react";
import { serviceDropdown3 } from "./data/NavItems";

import "./style/Dropdown.css";

function DropdownPeople() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown3.map((item) => {
          return (
            <li key={item.id}>
              <li
                li={item.path}
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

export default DropdownPeople;