import React, { useState } from "react";
import { serviceDropdown1 } from "./data/NavItems";

import { Link } from "react-router-dom";
import "./style/Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown1.map((item) => {
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

export default Dropdown;