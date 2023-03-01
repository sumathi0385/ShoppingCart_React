import React from "react";

export function FoodCard({ foods, onAdd, SelectedItems }) {


  return (
    <div className="food-container">
      <img className="food-image" src={foods.image} alt={foods.title} />
      <h6 className="food-title">{foods.title}</h6>
      <h6>⭐⭐⭐⭐</h6>
      <h6 className="food-cost">{foods.cost}</h6>

      <button className="addtocart" disabled={SelectedItems.includes(foods.id)} onClick={() => onAdd(foods, foods.id)}>
        Add to Cart
      </button>

    </div>
  );
}
