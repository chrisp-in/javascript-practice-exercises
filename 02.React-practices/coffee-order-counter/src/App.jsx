import { useState } from "react"

function App() {
  const[quantity, setQuantity] = useState(0);
  function handleClick(){
    setQuantity(quantity + 1);
  }
  function CoffeeCard(props){
    return(
      <div>
         <p>{props.name}</p>
         <p>${props.price}</p>
         <p>{quantity}</p>
         <button onClick={props.onClick}>Add to order</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Coffee Order Counter</h1>
      <CoffeeCard onClick={handleClick} name="Latte" price={3} />
    </div>
  );
}

export default App