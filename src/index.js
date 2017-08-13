import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/lib/animate.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

import CRouter from './routes';


// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <CRouter store={store} />
    </Provider>
 ,
  document.getElementById('root')
);
registerServiceWorker();