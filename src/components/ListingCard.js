import React, {useState} from "react";

function ListingCard({removeFromList, item}) {
  const [isFavorited, setIsFavorited] = useState(false)

  function handleFavorite() {
    setIsFavorited(isFavorited => !isFavorited)
  }

  const handleRemove = () => {
    console.log(item)
    console.log(item.id)
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => {
      console.log('I was deleted!')
      removeFromList(item)
    })
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt="description" />
      </div>
      <div className="details">
          <button className={isFavorited ? "emoji-button favorite active" : "emoji-button favorite"} onClick={handleFavorite}>{isFavorited ? "★" : "☆"}</button>
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={handleRemove}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
