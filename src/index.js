import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//Provider is a component that is the Parent of every thing inside of our application. As the parent it
// allows us to get access to all of the things related to "THE STORE" that we are gonna put all of the actual code on redux state
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={ store }>

    <BrowserRouter>
      <PersistGate persistor={ persistor }>
        <App />
      </PersistGate>
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);