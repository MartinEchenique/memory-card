import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import uniqid from 'uniqid';

import * as serviceWorker from './serviceWorker';

const cardsData = [
  { name: 'Boulbasaur', type: 'Plant', url: './imgs/1.png', id: uniqid() },
  { name: 'Squartle', type: 'Watter', url: './imgs/2.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/3.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/4.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/5.png', id: uniqid() },
  { name: 'Boulbasaur', type: 'Plant', url: './imgs/6.png', id: uniqid() },
  { name: 'Squartle', type: 'Watter', url: './imgs/7.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/8.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/9.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/10.png', id: uniqid() },
  { name: 'Boulbasaur', type: 'Plant', url: './imgs/11.png', id: uniqid() },
  { name: 'Squartle', type: 'Watter', url: './imgs/12.png', id: uniqid() },
  { name: 'Charmander', type: 'Plant', url: './imgs/13.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/14.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/15.png', id: uniqid() },
  { name: 'Boulbasaur', type: 'Plant', url: './imgs/16.png', id: uniqid() },
  { name: 'Squartle', type: 'Watter', url: './imgs/17.png', id: uniqid() },
  { name: 'Charmander', type: 'Plant', url: './imgs/18.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/19.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/20.png', id: uniqid() },
  { name: 'Boulbasaur', type: 'Plant', url: './imgs/21.png', id: uniqid() },
  { name: 'Squartle', type: 'Watter', url: './imgs/22.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/23.png', id: uniqid() },
  { name: 'Charmander', type: 'Fire', url: './imgs/24.png', id: uniqid() },
  { name: 'Charmander', type: 'Plant', url: './imgs/25.png', id: uniqid() },
];

ReactDOM.render(<App cardsData={cardsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
