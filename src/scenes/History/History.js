import React, { Component } from 'react';
import { connect } from 'react-redux';

import HistoryList from './HistoryList';

// import { Box, Message } from 'rebass';
// import HomeListPomodoro from './HomeListPomodoro';
// import { Card } from '../../components';

class History extends Component {
  render() {
    console.log('History RENDERIZA');
    const { games, gamesLength } = this.props;
    return <HistoryList games={games} gamesLength={gamesLength} />;
  }
}

const mapStateToProps = state => ({
  games: [],
  gamesLength: 0,
});

const mapDispatchToProps = {
  //historyGet: historyGetACT,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(History);
