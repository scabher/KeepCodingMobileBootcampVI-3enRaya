import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  gameReset as gameResetACT,
  gameResultClick as gameResultClickACT,
  gameSetCell as gameSetCellACT,
  historyAdd as historyAddACT,
  gameCellsSelector,
  gameTurnOfSelector,
  gameShowResultSelector,
  gameWinnerSelector,
} from '../../store';
import HomeGameTable from './HomeGameTable';

class HomeGameContainer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.showResult) {
      this.props.onGameFinished({
        winner: nextProps.winner.name,
        createdAt: new Date(),
      });
    }
  }

  render() {
    const {
      cells,
      turnOf,
      showResult,
      winner,
      onCellClick,
      onResetClick,
      onResultClick,
    } = this.props;
    return (
      <HomeGameTable
        cells={cells}
        turnOf={turnOf}
        showResult={showResult}
        winner={winner}
        onCellClick={onCellClick}
        onResetClick={onResetClick}
        onResultClick={onResultClick}
      />
    );
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
    onGameFinished: value => {
      dispatch(historyAddACT(value));
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
