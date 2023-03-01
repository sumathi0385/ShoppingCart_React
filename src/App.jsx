import { useState } from "react";
import React from "react";
import "./App.css";
import { HeroPanel, Main } from "./HeroPanel";
import { NavBar } from "./NavBar";

function App() {
  const [disabled, setDisabled] = useState(false);
 
  const foodlist = [
    {
      id: "1",
      title: "Burger",
      cost: "30",
      image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg"
    },
    {
      id: "2",
      title: "Cake",
      cost: "600",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuJzF8kyfRQgoYTQ1l_8WuPz3n45V_XKJgg&usqp=CAU"
    },
    {
      id: "3",
      title: "Fried Rice",
      cost: "100",
      image:"http://cookwithnabeela.com/wp-content/uploads/2021/08/Veg_Fried_Rice_Web_1.jpg"
    },
    {
      id: "4",
      title: "Dosa",
      cost: "50",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYGK4uMqdveTidY8cLB5Va8AoPEYZkvkPMg&usqp=CAU"
    },
  ];
  
  const [count, SetCount] = useState(0);
  const [CartItems, setCartItems] = useState([]);
  const [SelectedItems,setSelectedItems] = useState([]);

  const onAdd = (foodlist) => {
    
  const exist = CartItems.find((x) => x.id === foodlist.id);
    
    if (exist) {
      
      setSelectedItems([...SelectedItems, foodlist.id]); 

      setCartItems(
        CartItems.map((x) =>
          x.id === foodlist.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      
      
    } else {

      console.log(foodlist.id)
      
      
      setSelectedItems([...SelectedItems, foodlist.id]);
      
      setCartItems([...CartItems, { ...foodlist, qty: 1 }]);              
    }
    
  };
  

  const onRemove = (foodlist) => {

    const exist = CartItems.find((x) => x.id===foodlist.id)
    

    if(exist.qty===1){

      setCartItems(CartItems.filter((x) => x.id !==foodlist.id))
      
      var index = SelectedItems.indexOf(foodlist.id)
      if (index !== -1) {
     SelectedItems.splice(index, 1);
     
  }


    }else{

      setCartItems(CartItems.map((x) => x.id===foodlist.id ? {...exist, qty:exist.qty-1}:x)
       )

       index = SelectedItems.indexOf(foodlist.id)
      if (index !== -1) {
     SelectedItems.splice(index, 1);
      }
    }

    
  };

  return (
    <div>
      <NavBar count={CartItems.length} />
      <HeroPanel />
      <Main
        count={count}
        onAdd={onAdd}
        CartItems={CartItems}
        foodlist={foodlist}
        disabled={disabled}
        SelectedItems= {SelectedItems}
        onRemove={onRemove}
        
      />
    </div>
  );
}

export default App;
