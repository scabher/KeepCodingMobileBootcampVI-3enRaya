import { connect } from 'react-redux';
import { gameSetCells as gameSetCellsACT } from '../../store';
import HomeGameTable from './HomeGameTable';

const mapDispatchToProps = dispatch => {
  return {
    onCellClick: value => () => {
      console.log(value);
      dispatch(gameSetCellsACT(value));
    },
    onResetClick: value => () => alert('Click on Reset'),
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
