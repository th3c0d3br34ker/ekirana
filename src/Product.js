import './Product.css';

import React from 'react';
import { useStateValue } from './StateProvider';

const Product = ({ id, title, image, price, rating, height }) => {
  //eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <h1>{title}</h1>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                🌟
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt="" height={height} />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
