import React, { Fragment } from 'react';
import { Flex, Box, Button, Badge, Lead } from 'rebass';

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
          <Badge bg={turnOf.bgColor}>{turnOf.name}</Badge>
        </Lead>
      </Flex>
    </Box>
    <Flex mx={-3} flexWrap="wrap">
      {cells.map(({ id, player }) => (
        <Box
          key={id}
          width={[1, 1 / 3]}
          p={3}
          bg={player.bgColor}
          onClick={onCellClick()}
        >
          Flex
        </Box>
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
