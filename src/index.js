import { Provider } from 'unistore/preact';
import { store } from './state';

import './style';
import App from './components/App';

export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
