import React, { Fragment } from 'react';
import { Flex, Box, Button, Badge, Lead, Border } from 'rebass';
import styled from 'styled-components';

const BorderedBox = styled(Box)`
  &:hover {
    border: 1px solid yellow;
  }
  border: 1px solid grey;
`;

const HomeGameTable = ({
  cells,
  children,
  turnOf,
  onCellClick,
  onResetClick,
}) => (
  <Fragment>
    <Box py={3}>
      <Flex justifyContent="flex-end">
        <Lead textAlign="center">
          Turn of:
          <Badge bg={turnOf.bgColor}>{turnOf.name}</Badge>
        </Lead>
      </Flex>
    </Box>
    <Flex mx={-3} flexWrap="wrap">
      {cells.map(({ id, player }) => (
        <BorderedBox
          key={id}
          width={[1, 1 / 3]}
          p={3}
          bg={player.bgColor}
          onClick={onCellClick(id)}
        />
      ))}
    </Flex>
    <Box py={3}>
      <Flex justifyContent="center">
        <Button bg="yellow" fontSize={3} onClick={onResetClick()}>
          {children}
        </Button>
      </Flex>
    </Box>
  </Fragment>
);

export default HomeGameTable;
