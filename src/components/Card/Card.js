import React from 'react';
import { Box, Heading } from 'rebass';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Card = ({ title, children }) => (
  <StyledBox bg="white">
    <Heading fontSize={3} color="white" py={2} px={3} bg="secondary" m={0}>
      {title}
    </Heading>
    <Box>{children}</Box>
  </StyledBox>
);

export default Card;
