import Card from "../components/Card";
import React from "react";
import AppContext from "../context";

function Favorites() {
  const { heart, onAddToHeart } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {heart.map((item, index) => {
          console.log(item);
          return (
            <Card
              key={index}
              isFavorites={true}
              onHeart={onAddToHeart}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
