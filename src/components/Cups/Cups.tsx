import React from 'react';

import CupsItem from './CupsItem';

import './Cups.css';

interface Props {
  cupsList: number[];
}

const getItemWidth = (cups: number[]): number => 100 / cups.length;

const getItemLeftMargin = (cups: number[], idx: number): number =>
  cups[idx] * (98 / cups.length);

const Cups = ({ cupsList }: Props): React.ReactElement => (
  <section id="cups-list">
    <div className="cups-list-container">
      {cupsList.map((item, idx) => (
        <CupsItem
          key={idx}
          id={idx}
          style={{
            width: `${getItemWidth(cupsList)}%`,
            left: `${getItemLeftMargin(cupsList, idx)}%`,
          }}
        />
      ))}
    </div>
  </section>
);

export default Cups;
