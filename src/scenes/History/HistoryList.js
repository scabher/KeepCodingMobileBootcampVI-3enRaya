import React, { Fragment } from 'react';
import { Box, Message } from 'rebass';

// import HomeListPomodoro from './HomeListPomodoro';
import { Card } from '../../components';

const HistoryList = ({ games, gamesLength }) => (
  <Card title={`${gamesLength} Finished games`}>
    <Box>{games.length ? <Fragment /> : <Message>No games yet</Message>}</Box>
  </Card>
);

export default HistoryList;
