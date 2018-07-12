import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  max-width: 1080px;
  @media (max-width: 1100px) {
    padding: 0 20px;
  }
`;
