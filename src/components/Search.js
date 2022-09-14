import React, {useState} from "react";

function Search({list, setList}) {
  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    console.log(list)
    const searchedItem = list.filter(item => {
      // console.log(item)
      if (item.description.toLowerCase().includes(search.toLowerCase()) === true) {
        return true
      }
    })
    setList(searchedItem)
  }

  function handleChange(e) {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
