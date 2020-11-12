import './Home.css';

import Product from './Product';
import React from 'react';

const Home = () => (
  <div className="home">
    <div className="home__container">
      <div className="home__row">
        <Product
          id="12321341"
          title="Bread"
          price={20}
          rating={5}
          image={require('./assets/bread.jpg')}
        />
        <Product
          id="49538094"
          title="Tea"
          price={250}
          rating={4}
          image={require('./assets/tea.jpg')}
        />
      </div>

      <div className="home__row">
        <Product
          id="4903850"
          title="Rice"
          price={199.99}
          rating={3}
          image={require('./assets/rice.jpeg')}
          height={200}
        />
        <Product
          id="23445930"
          title="Milk"
          price={35}
          rating={5}
          image={require('./assets/milk.jpeg')}
          height={200}
        />
        <Product
          id="3254354345"
          title="Wheat"
          price={260}
          rating={4}
          image={require('./assets/wheat.jpeg')}
          height={200}
        />
      </div>

      <div className="home__row">
        <Product
          id="90829332"
          title="Tomato"
          price={80}
          rating={4}
          image={require('./assets/tomato.jpeg')}
        />
        <Product
          id="90829332"
          title="Potato"
          price={90}
          rating={4}
          image={require('./assets/potato.jpg')}
        />
      </div>
    </div>
  </div>
);

export default Home;
