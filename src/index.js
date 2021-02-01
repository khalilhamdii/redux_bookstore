import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import Nav from './components/nav';
import rootReducer from './reducers/index';

const initialState = {
  books: {
    books: [
      { id: 1, title: 'The Hunger Games', category: 'Action' },
      { id: 2, title: 'Dune', category: 'Sci-Fi' },
      { id: 3, title: 'Game of Thrones', category: 'History' },
    ],
  },
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
