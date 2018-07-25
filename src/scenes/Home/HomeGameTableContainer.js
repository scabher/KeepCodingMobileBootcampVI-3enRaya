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
  const cells = [];
  for (let index = 0; index < 9; index++) {
    cells[index] = {
      id: index,
      color: index % 2 === 0 ? 'white' : 'black',
      bgcolor: index % 2 === 0 ? 'black' : 'white',
    };
  }

  return {
    cells,
    bg: 'red',
    children: 'Reset',
    player: 'Player 1',
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeGameTable);
