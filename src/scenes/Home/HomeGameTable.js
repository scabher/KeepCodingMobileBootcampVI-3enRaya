import React from 'react';
import { Flex, Box } from 'rebass';

const HomeGameTable = ({ cells, onClick }) => (
  <Flex mx={-3} flexWrap="wrap">
    {cells.map(({ color, bgcolor }) => (
      <Box
        width={[1, 1 / 3]}
        p={3}
        color={color}
        bg={bgcolor}
        onClick={onClick()}
      >
        Flex
      </Box>
    ))}
  </Flex>
);

export default HomeGameTable;
