import React from 'react';
import clx from 'classnames';

import { GAME_NAME } from '../../config/strings';

import './Header.css';

export interface Props {
  message: string;
  isBlinking: boolean;
}

const Header = ({ message, isBlinking }: Props): React.ReactElement => (
  <header className="header">
    <h1>{GAME_NAME}</h1>
    <span
      className={clx('header-message', {
        blinking: isBlinking,
      })}
    >
      {message}
    </span>
  </header>
);

export default Header;
