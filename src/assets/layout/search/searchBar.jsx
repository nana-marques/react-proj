import React from 'react';
//import css
import Styles from './index.module.css';
import { FaSearch } from 'react-icons/fa';

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
      <div className={Styles.searchInput}>
        <input
        style={Styles.input}
        key="random1"
        value={keyword}
        placeholder={"Pesquisar"}
        onChange={(e) => setKeyword(e.target.value)} />
        <button type="button" className={Styles.button} aria-label="Search"><FaSearch className={Styles.navSearchButton} /></button>
      </div></>
  );
}

export default SearchBar