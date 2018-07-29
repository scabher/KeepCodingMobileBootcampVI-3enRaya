import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  historyGetAll as historyGetAllACT,
  formatedHistorySelector,
} from '../../store';
import HistoryList from './HistoryList';

class History extends Component {
  componentDidMount() {
    const { historyGetAll } = this.props;
    historyGetAll();
  }

  render() {
    const { games } = this.props;
    return <HistoryList games={games} />;
  }
}

const mapStateToProps = state => ({
  games: formatedHistorySelector(state),
});

const mapDispatchToProps = {
  historyGetAll: historyGetAllACT,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(History);
