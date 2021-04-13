import React from 'react';

const ShoppingItemIndex = ({cart, removeFruit}) => {
    return(<ul>
      {cart.map((item) => {
        return <li key={item.id}>
        {item.type}
        <button onClick={() => removeFruit(item.id)}>Delete Item</button>
        </li>;
      })}
    </ul>
    )
}

export default ShoppingItemIndex;