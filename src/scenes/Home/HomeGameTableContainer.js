import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  gameReset as gameResetACT,
  gameResultClick as gameResultClickACT,
  gameSetCell as gameSetCellACT,
  gameCellsSelector,
  gameTurnOfSelector,
  gameShowResultSelector,
  gameWinnerSelector,
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
  return {
    cells: gameCellsSelector(state),
    turnOf: gameTurnOfSelector(state),
    showResult: gameShowResultSelector(state),
    winner: gameWinnerSelector(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeGameContainer);
