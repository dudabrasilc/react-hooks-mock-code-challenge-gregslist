import React, {useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({list, setList}) {

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setList(data)
    })
  }, [])

  // console.log(list)

  function removeFromList(deletedItem) {
    console.log("in listings container", deletedItem)
    const newList = list.filter(item => {
      if (item.id !== deletedItem.id) {
        return true
      }
    })
    // console.log(newList)
    setList(newList)
  } 

  const listOfItems = list.map(item => {
    // console.log(item)
    return (
      <ListingCard key={item.id} item={item} removeFromList={removeFromList}/>
    )
  })

  return (
    <main>
      <ul className="cards">
        {listOfItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
