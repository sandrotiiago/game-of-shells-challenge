import React from 'react';
import clx from 'classnames';

import cupImg from '../../../assets/images/silver-cup.png';
import ballImg from '../../../assets/images/blue-ball.png';

import './CupsItem.css';

interface Props {
  id: number;
  ballCup: number;
  isBallPlaced: boolean;
  isBallHidden: boolean;
  raisedCups: boolean[];
  style: {
    width: string;
    left: string;
  };
  isPickCupDisabled: boolean;
  pickCup: (id) => void;
}

const CupsItem = ({
  id,
  ballCup,
  isBallPlaced,
  isBallHidden,
  raisedCups,
  style,
  isPickCupDisabled,
  pickCup,
}: Props): React.ReactElement => {
  const hasBall = id === ballCup && isBallPlaced && !isBallHidden;

  return (
    <button
      id={`cup-${id}`}
      className="cup"
      onClick={() => pickCup(id)}
      style={style}
      disabled={isPickCupDisabled}
    >
      <div className="cup-wrapper">
        <img
          src={cupImg}
          alt={'Cup ' + id}
          className={clx('cup-image', {
            'cup-raised': raisedCups[id],
          })}
        />
        {hasBall && (
          <img src={ballImg} alt="Ball" className="ball" width={80} />
        )}
      </div>
    </button>
  );
};

export default CupsItem;
