import { connect } from 'react-redux';

import { getCupsList } from '../../store/selectors/gaming/gaming';

import Cups from './Cups';

interface StateToProps {
  cupsList: number[];
}

const mapStateToProps = (state): StateToProps => ({
  cupsList: getCupsList(state),
});

export default connect(mapStateToProps)(Cups);
