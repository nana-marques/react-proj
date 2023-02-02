import React from 'react';
//import css
import Styles from './index.module.css';
import { FaSearch } from 'react-icons/fa';

import DropdownTreeSelect from './categorias';

const SearchBar = ({keyword,setKeyword}) => {

  // const BarStyling = {
  //   width:"40rem",
  //   background:"#F2F1F9",
  //   border:"none",
  //   padding:"0.5rem",
  //   margin: "10px",
  //   borderRadius: "5px 0 0 5px"
  // };

  return (
    <>
      <form className={Styles.searchInput}>
        <select name="categoria" id="categoria" className={Styles.searchDropdown}>
          {DropdownTreeSelect.map((menu, index) => {
            return (
              <option className="menu-items" key={index}>{menu.value}
                {/* <a href={menu.label}>{menu.value}  </a> */}
              </option>
            );
          })}
        </select>
        <input
        style={Styles.input}
        key="random1"
        value={keyword}
        placeholder={"Pesquisar"}
        onChange={(e) => setKeyword(e.target.value)} />
        <button type="button" className={Styles.button} aria-label="Search"><FaSearch className={Styles.navSearchButton} /></button>
      </form>
    </>
  );
}

export default SearchBar