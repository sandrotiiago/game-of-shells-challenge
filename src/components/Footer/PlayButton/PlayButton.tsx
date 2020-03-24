import React from 'react';

import { START_GAME_BTN, REPLAY_GAME_BTN } from '../../../config/strings';

import './PlayButton.css';

interface Props {
  ballCup: number;
  totalOfCups: number;
  hasPickedCup: boolean;
  startGame: (ballCup: number) => void;
  hideBall: () => void;
  toggleRaiseCup: (idx: number, value?: boolean) => void;
  incrementCupIterations: (totalOfCups: number) => void;
  enableUserInteraction: () => void;
}

const PlayButton = ({
  ballCup,
  hasPickedCup,
  totalOfCups,
  startGame,
  hideBall,
  toggleRaiseCup,
  incrementCupIterations,
  enableUserInteraction,
}: Props): React.ReactElement => {
  const play = (): void => {
    startGame(ballCup);

    setTimeout(() => toggleRaiseCup(ballCup, false), 1500);
    setTimeout(() => enableUserInteraction(), 10000);
    setTimeout(() => {
      hideBall();

      for (let i = 0; i < 10; i++) {
        setTimeout(() => incrementCupIterations(totalOfCups), i * 750);
      }
    }, 2250);
  };

  return (
    <button onClick={play} className="play-button">
      {!hasPickedCup ? START_GAME_BTN : REPLAY_GAME_BTN}
    </button>
  );
};

export default PlayButton;
