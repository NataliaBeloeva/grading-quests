import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAPI } from 'services/api';
import { fetchQuests } from 'store/api-action';
import { rootReducer } from 'store/root-reducer';
import App from 'components/app/app';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchQuests());

render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
