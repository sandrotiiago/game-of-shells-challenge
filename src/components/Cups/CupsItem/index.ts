import { connect } from 'react-redux';

import {
  getBallCup,
  getIsBallPlaced,
  getIsBallHidden,
  getRaisedCups,
  getIsPickCupDisabled,
} from '../../../store/selectors/gaming/gaming';

import { pickCup } from '../../../store/actions/gaming/gaming';

import CupsItem from './CupsItem';

interface StateToProps {
  ballCup: number;
  isBallPlaced: boolean;
  isBallHidden: boolean;
  isPickCupDisabled: boolean;
  raisedCups: boolean[];
}

interface DispatchToProps {
  pickCup: (id) => void;
}

const mapStateToProps = (state): StateToProps => ({
  ballCup: getBallCup(state),
  isBallPlaced: getIsBallPlaced(state),
  isBallHidden: getIsBallHidden(state),
  isPickCupDisabled: getIsPickCupDisabled(state),
  raisedCups: getRaisedCups(state),
});

const mapDispatchToProps = (dispatch): DispatchToProps => ({
  pickCup: (id) => dispatch(pickCup(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CupsItem);
