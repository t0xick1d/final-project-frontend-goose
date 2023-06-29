import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux-store/store';
import { GlobalStyles } from 'GlobalStyles';
import { PersistGate } from 'redux-persist/integration/react';
import 'stylesheet/vars.css';

import 'modern-normalize';
// в store має бути ще persist
//import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/final-project-frontend-goose">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
