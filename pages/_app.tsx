import { Provider } from 'react-redux';
import store from '../redux/store';  
import '../styles/index.css';
import '../styles/App.css';        
import 'tachyons';


export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
