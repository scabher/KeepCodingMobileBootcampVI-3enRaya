import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  gameReset as gameResetACT,
  gameResultClick as gameResultClickACT,
  gameSetCell as gameSetCellACT,
  gameCellsSelector,
} from '../../store';
import HomeGameTable from './HomeGameTable';

class HomeGameContainer extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return <HomeGameTable />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCellClick: value => () => {
      dispatch(gameSetCellACT(value));
    },
    onResultClick: value => () => {
      dispatch(gameResultClickACT());
    },
    onResetClick: value => () => {
      dispatch(gameResetACT());
    },
  };
};

const mapStateToProps = state => {
  console.log(state);
  // const cells = gameCellsSelector(state);
  return {
    cells: state.gameReducer.cells,
    bg: 'red',
    children: 'Reset',
    turnOf: state.gameReducer.turnOf,
    showResult: state.gameReducer.showResult,
    winner: state.gameReducer.winner,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeGameContainer);
