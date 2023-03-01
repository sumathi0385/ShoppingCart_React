import React from "react";

export function NavBar({ count }) {
  return (
    <div className="navbar-container">
      <div className="header">
        <h3>Home Kitchen</h3>
      </div>
      <div className="menus">
        <h6>Home</h6>
        <h6>About</h6>
        <h6>Shop</h6>
      </div>
      <div className="cart">
        <button className="nav-cart">
          Cart {count}
        </button>
      </div>
    </div>
  );
}
