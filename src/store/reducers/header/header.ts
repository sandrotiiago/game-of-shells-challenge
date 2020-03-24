import { Action } from 'redux';

import {
  START_GAME,
  ENABLE_USER_INTERACTION,
} from '../../action-types/gaming/gaming';

import { CHOOSE_CUP } from '../../../config/strings';

interface HeaderReducer {
  message: string;
  isBlinking: boolean;
}

interface HeaderAction extends Action {
  payload: {
    message?: string;
    isBlinking?: boolean;
  };
}

const initialState: HeaderReducer = {
  message: null,
  isBlinking: false,
};

export default (state = initialState, action: HeaderAction): HeaderReducer => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        message: null,
        isBlinking: false,
      };
    case ENABLE_USER_INTERACTION:
      return {
        ...state,
        message: CHOOSE_CUP,
        isBlinking: true,
      };
    default:
      return state;
  }
};
