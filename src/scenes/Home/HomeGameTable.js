import React, { Fragment } from 'react';
import { Flex, Box, Button, Badge, Lead, Fixed, Modal, Heading } from 'rebass';
import styled from 'styled-components';

const BorderedBox = styled(Box)`
  &:hover {
    border: 1px solid yellow;
  }
  border: 1px solid grey;
  height: 150px;
`;

const BorderedModal = styled(Modal)`
  &:hover {
    border: 1px solid yellow;
  }
  border: 1px solid grey;
  width: 300px;
`;

const HomeGameTable = ({
  cells,
  children,
  turnOf,
  showResult,
  winner,
  onCellClick,
  onResetClick,
  onResultClick,
}) => (
  <Fragment>
    <div>
      {showResult && (
        <div onClick={onResultClick()}>
          <Fixed top={0} right={0} bottom={0} left={0} />
          <BorderedModal width={300}>
            <Flex justifyContent="center">
              <Heading>Game Finished!</Heading>
            </Flex>
            <Flex justifyContent="center">
              {winner.name === turnOf.name ? turnOf.name : 'Draw'}
            </Flex>
          </BorderedModal>
        </div>
      )}
    </div>
    <Box py={3}>
      <Flex justifyContent="flex-end">
        <Lead textAlign="center">
          Turn of:
          <Badge bg={turnOf.bgColor}>{turnOf.name}</Badge>
        </Lead>
      </Flex>
    </Box>
    <Box py={3}>
      <Flex justifyContent="center">
        <Box py={3} width={450}>
          <Flex mx={-3} flexWrap="wrap">
            {cells.map(({ id, player }) => (
              <BorderedBox
                key={id}
                width={1 / 3}
                p={3}
                bg={player.bgColor}
                onClick={onCellClick(id)}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
    <Box py={3}>
      <Flex justifyContent="center">
        <Button bg="btnPrimary" fontSize={3} onClick={onResetClick()}>
          {children}
        </Button>
      </Flex>
    </Box>
  </Fragment>
);

export default HomeGameTable;
