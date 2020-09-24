import React from "react";
import "./search-box-component.css";


export const SearchBox = (props) => {
  const { handlechange, placeholder } = props;
  return (
    <div >
        <input className="search"
          onChange={handlechange}
          type="search"
          placeholder={placeholder}
        />
    </div>
  );
};
