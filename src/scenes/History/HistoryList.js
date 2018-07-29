import React, { Fragment } from 'react';
import { Box, Message } from 'rebass';
import { Card } from '../../components';
import HistoryListRow from './HistoryListRow';

const HistoryList = ({ games }) => (
  <Card title={`${games.length} Finished games`}>
    <Box>
      {games.length ? (
        <Fragment>
          <HistoryListRow winner="Winner" createdAt="Game Date/Hour" heading />
          {games.map(({ id, winner, createdAt }) => (
            <HistoryListRow key={id} winner={winner} createdAt={createdAt} />
          ))}
        </Fragment>
      ) : (
        <Message>No games yet</Message>
      )}
    </Box>
  </Card>
);

export default HistoryList;
