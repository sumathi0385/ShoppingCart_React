import React from "react";
import { Basket } from "./Basket";
import { FoodList } from "./FoodList";

export function HeroPanel() {
  return (
    <div className="hero-image">
      <img
        className="image1"
        src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/04/acj-2804-chennai-beach-restaurant-cover.jpg"
        alt="Restaurent" />
    </div>
  );
}
export function Main({ count, onAdd, CartItems, foodlist, disabled, SelectedItems, onRemove }) {
  return (
    <div className="main-container">
      <FoodList count={count} onAdd={onAdd} foodlist={foodlist} disabled={disabled} CartItems={CartItems} SelectedItems={SelectedItems} />
      <Basket CartItems={CartItems} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
}
