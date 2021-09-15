import { createStore } from 'redux';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from './localStorage';
import throttle from 'lodash/throttle';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const persistedState = loadStateFromLocalStorage();
const store = createStore(reducer, persistedState, composeWithDevTools());

store.subscribe(throttle(() => {
  saveStateToLocalStorage( 
    store.getState()
  );
}, 1000));

export default store;
