import React from "react";
import Search from "./Search";

function Header({list, setList}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search list={list} setList={setList}/>
    </header>
  );
}

export default Header;
