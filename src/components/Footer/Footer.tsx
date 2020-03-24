import React from 'react';

import PlayButton from './PlayButton';

import './Footer.css';

interface Props {
  isStartGameDisabled: boolean;
}

const Footer = ({ isStartGameDisabled }: Props): React.ReactElement => (
  <footer className="footer">{!isStartGameDisabled && <PlayButton />}</footer>
);

export default Footer;
