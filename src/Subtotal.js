import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';
import React from 'react';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Subtotal() {
  const history = useHistory();
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />

      <button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
