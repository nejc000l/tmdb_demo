import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSetting, AiOutlinePlus,AiOutlineBell} from "react-icons/ai";
import {RiEnglishInput} from 'react-icons/ri'
import "./style/Navbar.css";
import { navItems } from "./data/NavItems";
import Dropdown from "./DropdownMovies";
import DropdownTv from "./DropdownTV";
import DropdownPeople from "./DropdownPeople";
import DropdownMore from "./DropdownMore";


function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const style = { fill: "#fff", fontSize: "1.5em", cursor: "pointer"}

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
        <a>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20"/>      
      </a>          <Icons.FaTree />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Movies") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
                
              );
            }
            if (item.title === "Tv Shows") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <DropdownTv />}
                </li>
                
              );
            }
            if (item.title === "People") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <DropdownPeople />}
                </li>
                
              );
            }
            if (item.title === "More") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <DropdownMore />}
                </li>
                
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        



        
        <div className="icons-list">
    <AiOutlinePlus className="icon" style={style} />
    <RiEnglishInput className="icon" style={style} />
    <AiOutlineBell className="icon" style={style} />
    <AiOutlineSetting className="icon" fill='#01b4e4' cursor='pointer' />
    <FaSearch className="icon" fill="#01b4e4" cursor='pointer'  />
    </div>
      </nav>
    </>
  );
}

export default Navbar;