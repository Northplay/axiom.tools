import React from 'react';
import styled from 'styled-components';

import { StyledContainer, StyledContent } from '../../lib/styles';

const Content = StyledContent.extend`
  justify-content: space-between;
  margin-bottom: 100px;

  @media (max-width: 800px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
`;

const App = styled.a`
  display: flex;
  flex-direction: column;
  flex: 0 1 45%;
  text-decoration: none;
  transition: 0.15s ease;
  margin-bottom: 90px;

  @media (max-width: 800px) {
    flex: 0 1 100%;
    max-width: 490px;
    margin-bottom: 50px;
  }

  &:hover {
    transform: scale(1.05, 1.05);
    & > img {
      box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.05);
    }
  }
`;

const AppImage = styled.img`
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, 0.08);
  max-width: 100%;
  height: auto !important;
`;

const Footnote = styled.div`
  font: 400 14px/1.1em lato, Helvetica Neue, sans-serif;
  color: #717171;
  margin-top: 10px;
`;

const Apps = () => <StyledContainer>
  <Content>
    <App href="https://northplay.co/dr-tv/" target="_blank">
      <AppImage src="/static/app-dr.jpg" />
      <Footnote>
        DR TV Built with Axiom
      </Footnote>
    </App>
    <App href="https://www.youtube.com/watch?v=C13p5kiREF0" target="_blank">
      <AppImage src="/static/app-viaplay.jpg" />
      <Footnote>
        Viaplay Prototype Built with Axiom
      </Footnote>
    </App>
  </Content>
</StyledContainer>;

export default Apps;
