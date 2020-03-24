import { connect } from 'react-redux';

import {
  getBallCup,
  getHasPickedCup,
} from '../../../store/selectors/gaming/gaming';
import { getTotalOfCups } from '../../../store/selectors/settings/settings';

import {
  startGame,
  hideBall,
  toggleRaiseCup,
  incrementCupIterations,
  enableUserInteraction,
} from '../../../store/actions/gaming/gaming';

import PlayButton from './PlayButton';

interface StateToProps {
  ballCup: number;
  totalOfCups: number;
  hasPickedCup: boolean;
}

interface DispatchToProps {
  startGame: (ballCup: number) => void;
  hideBall: () => void;
  toggleRaiseCup: (idx: number, value?: boolean) => void;
  incrementCupIterations: (totalOfCups: number) => void;
  enableUserInteraction: () => void;
}

const mapStateToProps = (state): StateToProps => ({
  ballCup: getBallCup(state),
  totalOfCups: getTotalOfCups(state),
  hasPickedCup: getHasPickedCup(state),
});

const mapDispatchToProps = (dispatch): DispatchToProps => ({
  startGame: (ballCup) => dispatch(startGame(ballCup)),
  hideBall: () => dispatch(hideBall()),
  toggleRaiseCup: (idx, value) => dispatch(toggleRaiseCup(idx, value)),
  incrementCupIterations: (totalOfCups) =>
    dispatch(incrementCupIterations(totalOfCups)),
  enableUserInteraction: () => dispatch(enableUserInteraction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);
