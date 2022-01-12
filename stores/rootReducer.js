import {combineReducers} from 'redux';

import tabReducer from './tab/tabReducer';
import marketReducer from './Market/marketReducer';

export default combineReducers({tabReducer, marketReducer});
