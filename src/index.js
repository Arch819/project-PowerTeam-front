import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import {
  // persistor,
  store,
} from 'store/store';
import { App } from 'components/App';
// import { Loader } from 'components/Loader';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
      <BrowserRouter basename="/project-PowerTeam-front">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
