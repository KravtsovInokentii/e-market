import Card from "../components/Card";
import React from "react";

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToHeart,
  onAddToCart,
  setSearchValue,
  isLoading,
}) {

  const renderItems = () => {
    const filtreditems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filtreditems).map((item, index) => (
      <Card
        key={index}
        onHeart={(obj) => onAddToHeart(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
//1 залуп
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue
            ? `Search by request: "${searchValue}"`
            : "All available puppies"}
        </h1>
        <div className="search-block d-flex">
          <img width={30} height={30} src="/img/search.png" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/search.png"
              alt="Clear"
            />
          )}

          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search ..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
