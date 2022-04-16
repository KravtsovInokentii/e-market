import Card from "../components/Card";
import React from "react";
import axios from "axios";
import AppContext from "../context";

function Orders() {
  const { onAddToHeart, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://624fe2bcf0ae10a8ea5085ae.mockapi.io/orders"
      );
      setOrders(data.map((obj) => obj.items).flat());

      setIsLoading(false);
      console.log("Orders", data);
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card
            key={index}
            onHeart={(obj) => onAddToHeart(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
