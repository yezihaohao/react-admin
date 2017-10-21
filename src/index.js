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
import { AppContainer } from 'react-hot-loader';


// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
console.log(store.getState());

const render = Component => {   // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component store={store} />
            </Provider>
        </AppContainer>
        ,
        document.getElementById('root')
    );
};

render(CRouter);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./routes', () => {
        render(CRouter);
    })
}

// ReactDOM.render(
//     <AppContainer>
//         <Provider store={store}>
//             <CRouter store={store} />
//         </Provider>
//     </AppContainer>
//  ,
//   document.getElementById('root')
// );
registerServiceWorker();