import { create } from 'lodash';
import { createStore } from 'redux';

import reducer from './reducers';

const store = createStore(reducer);

export default store;
