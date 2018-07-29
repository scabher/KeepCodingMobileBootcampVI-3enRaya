import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from 'rebass';

const StyledText = styled(Text)`
  flex: 1;
`;

const HistoryListRow = ({ winner, createdAt, heading }) => (
  <Flex py={1} px={2}>
    <StyledText fontWeight={heading ? 'bold' : 'normal'}>{winner}</StyledText>
    <StyledText fontWeight={heading ? 'bold' : 'normal'}>
      {createdAt}
    </StyledText>
  </Flex>
);

export default HistoryListRow;
