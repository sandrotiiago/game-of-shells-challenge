import { Action } from 'redux';

import shuffle from '../../../utils/shuffle';

import {
  INIT_GAME,
  START_GAME,
  TOGGLE_RAISE_CUP,
  INCREMENT_CUP_ITERATIONS,
  ENABLE_USER_INTERACTION,
  HIDE_BALL,
} from '../../action-types/gaming/gaming';

interface GamingReducer {
  isStartGameDisabled: boolean;
  isPickCupDisabled: boolean;
  hasPickedCup: boolean;
  isBallPlaced: boolean;
  isBallHidden: boolean;
  cupsList: number[];
  raisedCups: boolean[];
  cupIterations: number;
  ballCup: number;
}

export interface GamingAction extends Action {
  payload?: {
    isStartGameDisabled?: boolean;
    isPickCupDisabled?: boolean;
    hasPickedCup?: boolean;
    isBallPlaced?: boolean;
    isBallHidden?: boolean;
    raisedCups?: boolean[];
    cupIterations?: number;
    ballCup?: number;
    totalOfCups?: number;
    raiseCupValue?: boolean;
  };
}

const initialState: GamingReducer = {
  isStartGameDisabled: false,
  isPickCupDisabled: true,
  hasPickedCup: false,
  isBallPlaced: false,
  isBallHidden: false,
  cupsList: [],
  raisedCups: [],
  cupIterations: 0,
  ballCup: null,
};

export default (state = initialState, action: GamingAction): GamingReducer => {
  switch (action.type) {
    case INIT_GAME:
      return {
        ...state,
        ballCup: action.payload.ballCup,
        raisedCups: Array.from(
          { length: action.payload.totalOfCups },
          () => false,
        ),
        cupsList: Array.from(
          { length: action.payload.totalOfCups },
          (x, i) => i,
        ),
      };
    case START_GAME:
      return {
        ...state,
        hasPickedCup: false,
        isBallHidden: false,
        isBallPlaced: true,
        isStartGameDisabled: true,
        raisedCups: state.raisedCups.map((cup, idx) =>
          idx === action.payload.ballCup ? !cup : cup,
        ),
      };
    case TOGGLE_RAISE_CUP:
      return {
        ...state,
        raisedCups: state.raisedCups.map((cup, idx) =>
          idx === action.payload.ballCup
            ? action.payload.raiseCupValue || !cup
            : cup,
        ),
      };
    case INCREMENT_CUP_ITERATIONS:
      return {
        ...state,
        cupIterations: state.cupIterations + 1,
        cupsList: shuffle(state.cupsList, action.payload.totalOfCups),
      };
    case HIDE_BALL:
      return {
        ...state,
        isBallHidden: true,
      };
    case ENABLE_USER_INTERACTION:
      return {
        ...state,
        isPickCupDisabled: false,
      };
    default:
      return state;
  }
};
