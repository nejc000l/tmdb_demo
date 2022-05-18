import React, { useState } from "react";
import { serviceDropdown4 } from "./data/NavItems";

import "./style/Dropdown.css";

function DropdownMore() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown4.map((item) => {
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

export default DropdownMore;