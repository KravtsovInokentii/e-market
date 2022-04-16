import React from "react";

import axios from "axios";
import { useCart } from "../hooks/useCart";
import Info from "./Info";
function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://624fe2bcf0ae10a8ea5085ae.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert("Error creating order :(");
    }
    setIsLoading(false);
  };
  return (
    <div className="overLay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Basket{" "}
          <img
            onClick={onClose}
            className=" cu-p"
            src="/img/remove.png"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              <div>
                {items.map((obj) => (
                  <div
                    key={obj.id}
                    className="cartItem d-flex align-center justify-between mb-30 "
                  >
                    <div
                      style={{ backgroundImage: `url(${obj.imageUrl})` }}
                      className="cartItemImg"
                    ></div>
                    <div className="mr-10">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} $</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className="removeBtn"
                      src="/img/remove.png"
                      alt="Remove"
                    />
                  </div>
                ))}
              </div>
              <div className="cartTotalBlok">
                <ul>
                  <li>
                    <span>Total:</span>
                    <div></div>
                    <b>{totalPrice} $</b>
                  </li>
                  <li>
                    <span>Tax 5%:</span>
                    <div></div>
                    <b> {(totalPrice / 100) * 5} $</b>
                  </li>
                </ul>
                <button
                  disabled={isLoading}
                  onClick={onClickOrder}
                  className="greenButton"
                >
                  Checkout <img src="/img/arrow.png" alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформен!" : "Корзина пустая"}
            descriotion={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Please select at least one dog to order."
            }
            image={
              isOrderComplete
                ? "/img/completeOrder.png"
                : "/img/dog/cartShopping.png"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
