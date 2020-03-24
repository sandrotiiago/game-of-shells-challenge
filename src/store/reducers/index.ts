import { combineReducers } from 'redux';

import header from './header/header';
import gaming from './gaming/gaming';
import settings from './settings/settings';

export default combineReducers({
  header,
  gaming,
  settings,
});
