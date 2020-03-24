import { connect } from 'react-redux';

import { getRandomCup } from '../../store/selectors/gaming/gaming';
import { getTotalOfCups } from '../../store/selectors/settings/settings';

import { initGame } from '../../store/actions/gaming/gaming';

import App from './App';

interface StateToProps {
  ballCup: number;
  totalOfCups: number;
}

interface DispatchToProps {
  initGame: (totalOfCups: number, ballCup: number) => void;
}

const mapStateToProps = (state): StateToProps => ({
  ballCup: getRandomCup(state),
  totalOfCups: getTotalOfCups(state),
});

const mapDispatchToProps = (dispatch): DispatchToProps => ({
  initGame: (totalOfCups, ballCup) => dispatch(initGame(totalOfCups, ballCup)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
