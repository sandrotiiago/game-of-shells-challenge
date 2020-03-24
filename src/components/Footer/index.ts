import { connect } from 'react-redux';

import { getIsStartGameDisabled } from '../../store/selectors/gaming/gaming';

import Footer from './Footer';

interface StateToProps {
  isStartGameDisabled: boolean;
}

const mapStateToProps = (state): StateToProps => ({
  isStartGameDisabled: getIsStartGameDisabled(state),
});

export default connect(mapStateToProps)(Footer);
