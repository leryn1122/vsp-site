import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '@/styles/global.less';
import App from '@/layouts';
import store from '@/store';

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename='/'>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
};

export default renderApp();
