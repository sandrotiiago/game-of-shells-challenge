import { UPDATE_SETTINGS } from '../../action-types/settings';

export const dispatchUpdateSettings = (difficulty, total): object => ({
  type: UPDATE_SETTINGS,
  difficulty,
  totalOfCups: total,
});

export const updateSettings = (difficulty, total) => (dispatch) => {
  dispatch(dispatchUpdateSettings(difficulty, total));
};
