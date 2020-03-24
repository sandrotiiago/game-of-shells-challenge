import {
  INIT_GAME,
  START_GAME,
  PICK_CUP,
  TOGGLE_RAISE_CUP,
  INCREMENT_CUP_ITERATIONS,
  ENABLE_USER_INTERACTION,
  HIDE_BALL,
} from '../../action-types/gaming/gaming';

import { GamingAction } from '../../reducers/gaming/gaming';

const dispatchInitGame = (
  totalOfCups: number,
  ballCup: number,
): GamingAction => ({
  type: INIT_GAME,
  payload: { totalOfCups, ballCup },
});

const dispatchStartGame = (ballCup: number): GamingAction => ({
  type: START_GAME,
  payload: { ballCup },
});

const dispatchHideBall = (): GamingAction => ({
  type: HIDE_BALL,
});

const dispatchPickUp = (id: number): GamingAction => ({
  type: PICK_CUP,
  // @ts-ignore
  payload: { id },
});

const dispatchToggleRaiseCup = (
  ballCup: number,
  raiseCupValue?: boolean,
): GamingAction => ({
  type: TOGGLE_RAISE_CUP,
  payload: { ballCup, raiseCupValue },
});

const dispatchIncrementCupIterations = (totalOfCups: number): GamingAction => ({
  type: INCREMENT_CUP_ITERATIONS,
  payload: { totalOfCups },
});

const dispatchEnableUserInteraction = (): GamingAction => ({
  type: ENABLE_USER_INTERACTION,
});

export const initGame = (totalOfCups: number, ballCup: number) => (
  dispatch,
) => {
  dispatch(dispatchInitGame(totalOfCups, ballCup));
};

export const startGame = (ballCup) => (dispatch) => {
  dispatch(dispatchStartGame(ballCup));
};

export const toggleRaiseCup = (idx, value) => (dispatch) => {
  dispatch(dispatchToggleRaiseCup(idx, value));
};

export const incrementCupIterations = (totalOfCups) => (dispatch) => {
  dispatch(dispatchIncrementCupIterations(totalOfCups));
};

export const hideBall = () => (dispatch) => {
  dispatch(dispatchHideBall());
};

export const enableUserInteraction = () => (dispatch) => {
  dispatch(dispatchEnableUserInteraction());
};

export const pickCup = (id: number) => (dispatch) => {
  dispatch(dispatchPickUp(id));
};
