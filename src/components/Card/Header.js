import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center ">
          <img width={80} height={80} src="/img/dog-logo.png" alt="Dog-logo" />
          <div>
            <h3 className="text-uppercase">React Puppies</h3>
            <h5>Puppy shop</h5>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-20 cu-p">
          <img width={30} height={30} src="/img/cart.png" alt="Cart" />
          <span>{totalPrice} $.</span>
        </li>
        <Link to="/Favorites">
          <li className=" mr-20 cu-p">
            <img width={20} height={20} src="/img/heart 1.png" alt="Bookmark" />
          </li>
        </Link>

        <Link to="/Orders">
          <li>
            <img width={20} height={20} src="/img/user.png" alt="User" />
          </li>
        </Link>
      </ul>
    </header>
  );
}
export default Header;
