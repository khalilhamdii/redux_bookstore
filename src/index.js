import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = {
  books: {
    books: [
      { id: 1, title: 'Book 1', category: 'Action' },
      { id: 2, title: 'Book 2', category: 'Horror' },
      { id: 3, title: 'Book 3', category: 'History' },
    ],
  },
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
