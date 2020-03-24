import { connect } from 'react-redux';

import { getIsBlinking, getMessage } from '../../store/selectors/header/header';

import Header, { Props } from './Header';

const mapStateToProps = (state): Props => ({
  message: getMessage(state),
  isBlinking: getIsBlinking(state),
});

export default connect(mapStateToProps)(Header);
