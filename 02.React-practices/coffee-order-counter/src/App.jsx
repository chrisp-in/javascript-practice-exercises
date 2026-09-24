import { useState } from "react";

function App() {
  function CoffeeCard(props) {
    const [quantity, setQuantity] = useState(0);

    function handleClick() {
      setQuantity(quantity + 1);
    }

    function decrease() {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    }

    return (
      <div>
        <p>{props.name}</p>
        <p>Price: ${props.price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${props.price * quantity}</p>

        <button onClick={handleClick}>Add to order</button>
        <button onClick={decrease}>Remove from order</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Coffee Order Counter</h1>

      <CoffeeCard name="Latte" price={3} />
      <CoffeeCard name="Mocha" price={5} />
      <CoffeeCard name="Espresso" price={2} />
    </div>
  );
}

export default App;