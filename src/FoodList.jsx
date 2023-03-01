import React from "react";
import { FoodCard } from "./FoodCard";

export function FoodList({ count, onAdd, foodlist, disabled, CartItems, SelectedItems }) {


  return (
    <div className="food-list">
      {foodlist.map((f, index) => (
        <FoodCard foods={f} count={count} onAdd={onAdd} disabled={disabled} key={index} CartItems={CartItems} SelectedItems={SelectedItems} />
      ))}
    </div>
  );
}
