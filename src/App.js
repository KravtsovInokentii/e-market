import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Card/Header";
import Drawer from "./components/Card/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [heart, setHeart] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://624fe2bcf0ae10a8ea5085ae.mockapi.io/cart"
      );
      const HeartResponse = await axios.get(
        "https://624fe2bcf0ae10a8ea5085ae.mockapi.io/Heart"
      );
      const itemsResponse = await axios.get(
        "https://624fe2bcf0ae10a8ea5085ae.mockapi.io/items"
      );

      console.log(cartResponse.data);
      setIsLoading(false);
      setCartItems(cartResponse.data);
      setHeart(HeartResponse.data);
      setItems(itemsResponse.data);
      console.log(itemsResponse.data);
      console.log(HeartResponse);
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.dogId) === Number(obj.dogId))) {
        const cartObj = cartItems.find((item) => item.dogId === obj.dogId);
        console.log("cartObj", cartObj);
        axios.delete(
          `https://624fe2bcf0ae10a8ea5085ae.mockapi.io/cart/${cartObj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.dogId) !== Number(obj.dogId))
        );
      } else {
        console.log(obj);
        const added = await axios.post(
          "https://624fe2bcf0ae10a8ea5085ae.mockapi.io/cart",
          obj
        );
        setCartItems((prev) => [...prev, added.data]);
      }
    } catch (error) {}
    console.log(cartItems);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://624fe2bcf0ae10a8ea5085ae.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToHeart = async (obj) => {
    try {
      if (heart.find((favObj) => favObj.dogId === obj.dogId)) {
        const favObj = heart.find((favObj) => favObj.dogId === obj.dogId);
        axios.delete(
          `https://624fe2bcf0ae10a8ea5085ae.mockapi.io/Heart/${favObj.id}`
        );
        setHeart((prev) => prev.filter((item) => item.dogId !== obj.dogId));
      } else {
        const { data } = await axios.post(
          "https://624fe2bcf0ae10a8ea5085ae.mockapi.io/Heart",
          obj
        );
        setHeart((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (dogId) => {
    return cartItems.some((obj) => Number(obj.dogId) === Number(dogId));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        heart,
        isItemAdded,
        onAddToHeart,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToHeart={onAddToHeart}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
