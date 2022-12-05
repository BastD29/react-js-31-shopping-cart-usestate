import { useState } from 'react';
import { products } from './data/data';

export default function App() {

  const [cart, setCart] = useState([]);

  console.log(cart);

  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  const getTotal = () => {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
    return total.toLocaleString(undefined, currencyOptions)
  }

  const add = (product) => {
    setCart([ ...cart, product ]);
  }

  const remove = (product) => {
    const productIndex = cart.findIndex(p => p.name === product.name);
    if (productIndex >= 0){
      setCart(cart => {
        const copy = [ ...cart ];
        copy.splice(productIndex, 1);
        return copy;
      })
    }
  }

  return (
    <>
      <div>
        Shopping cart: {cart.length} total items.
      </div>
      <div>Total: {getTotal()}</div>
      {products.map(product => (
        <div key={product.name}>
          <div className='product'>
            <span>{product.emoji}</span>
          </div>
          <button onClick={() => add(product)}>Add</button>
          <button onClick={() => remove(product)}>Remove</button>
        </div>
      ))}
    </>
  )
}
