export const getHasPickedCup = (state): boolean => state.gaming.hasPickedCup;

export const getBallCup = (state): number => state.gaming.ballCup;

export const getIsBallPlaced = (state): boolean => state.gaming.isBallPlaced;

export const getIsBallHidden = (state): boolean => state.gaming.isBallHidden;

export const getRaisedCups = (state): boolean[] => state.gaming.raisedCups;

export const getIsPickCupDisabled = (state): boolean =>
  state.gaming.isPickCupDisabled;

export const getIsStartGameDisabled = (state): boolean =>
  state.gaming.isStartGameDisabled;

export const getCupIterations = (state): number => state.gaming.cupIterations;

export const getCupsList = (state): number[] => state.gaming.cupsList;

export const getRandomCup = (state): number =>
  Math.floor(Math.random() * state.settings.totalOfCups);
