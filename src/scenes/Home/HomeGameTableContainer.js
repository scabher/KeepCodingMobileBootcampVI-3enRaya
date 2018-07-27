import { connect } from 'react-redux';
import {
  gameReset as gameResetACT,
  gameSetCell as gameSetCellACT,
} from '../../store';
import HomeGameTable from './HomeGameTable';

const mapDispatchToProps = dispatch => {
  return {
    onCellClick: value => () => {
      dispatch(gameSetCellACT(value));
    },
    onResetClick: value => () => {
      dispatch(gameResetACT());
    },
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    cells: state.gameReducer.cells,
    bg: 'red',
    children: 'Reset',
    turnOf: state.gameReducer.turnOf,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeGameTable);
