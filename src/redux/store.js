import {createStore} from 'redux';

import data from './reducers/index'

const store = createStore(data);

export default store;