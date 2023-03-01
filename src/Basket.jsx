import React from "react";

export function Basket({ CartItems, onAdd, onRemove }) {

  return (
    <div className="basket-container">
      <h5 className="heading">My Cart Items</h5>

      {/* {CartItems.length === 0 && <div> Cart Items Empty</div>} */}

      <table className="basket-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Qty </th>
            <th>Price </th>
            <th>Add/Deduct</th>
          </tr>
        </thead>
        <tbody>
          {CartItems.length === 0 ? (
            <tr>
              <td colSpan={4}> Cart Item is empty</td>
            </tr>
          ) : (
            CartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.qty}</td>
                <td>{item.cost}</td>
                <td className="add-deduct-button">
                  <button onClick={() => onAdd(item)}>+</button>
                  <button onClick={() => onRemove(item)}>-</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* <label id="foodtitle" for="food1">
              Food Title:
            </label>
            <label id="food1">Biriyani</label> <br></br>
      
            <label>Qty: </label>
            <label>1</label> */}
    </div>
  );
}
