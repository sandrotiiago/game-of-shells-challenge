import { AnyAction } from 'redux';

import { UPDATE_SETTINGS } from '../../action-types/settings';

interface SettingsReducer {
  difficulty: string;
  totalOfCups: number;
}

const initialState: SettingsReducer = {
  difficulty: 'slow',
  totalOfCups: 3,
};

export default (state = initialState, action: AnyAction): SettingsReducer => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        difficulty: action.payload.difficulty,
        totalOfCups: action.payload.totalOfCups,
      };

    default:
      return state;
  }
};
