import React, { useEffect } from 'react';

import Cups from '../Cups';
import Header from '../Header';
import Footer from '../Footer';

import '../../assets/styles/reset.css';
import './App.css';

interface Props {
  ballCup: number;
  totalOfCups: number;
  initGame: (totalOfCups: number, ballCup: number) => void;
}

const App = ({ ballCup, totalOfCups, initGame }: Props): React.ReactElement => {
  useEffect(() => {
    initGame(totalOfCups, ballCup);
  }, []);

  return (
    <div id="content">
      <div className="container">
        <Header />
        <Cups />
        <Footer />
      </div>
    </div>
  );
};

export default App;
