import React from 'react';
import styled from 'styled-components';

import Button from '../shared/button';
import { StyledContainer, StyledContent } from '../../lib/styles';

const Container = styled(StyledContainer)`
  background-image: url(/static/header-background.png);
  background-position: top center;
  background-size: cover;
  min-height: 1367px;
  color: #ddd;
  align-items: center;
  display: flex;

  @media (max-width: 800px) {
    background-position: bottom center;
    min-height: unset;
    padding: 100px 0px 200px 0px;
  }
`;

const Content = styled(StyledContent)`
  flex-wrap: nowrap;
`;

const Graphic = styled.div`
  flex: 0 1 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 45%;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Television = styled.img`
  position: absolute;
  top: -300px;
  right: -35px;
`;

const Text = styled.div`
  flex: 0 1 55%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (max-width: 800px) {
    flex: 0 1 100%;
  }
`;

const Bread = styled.p`
  font-size: 28px;
  line-height: 1.4em;
`;

const Logo = styled.img`
  width: 176px;
  height: 122px;
  margin-bottom: 30px;
`;

const Pricing = styled(Button)`
  background-color: #18c9f9;
  background: linear-gradient(0.25turn, #7800dd, #0d7bff, #00ffff);
  margin-top: 40px;
`;

const Header = ({ pricing }) => <Container>
  <Content>
    <Graphic>
      <Television src="/static/header-tv.png" />
    </Graphic>
    <Text>
      <Logo src="/static/logo.png" alt="Axiom" />
      <Bread>
        Axiom is a framework for better streaming Apple TV Apps.
        We have taken everything we have learned building best-in-class
        native experiences for the big screen and created a system
        of reusable components that will make your Apple TV app both
        affordable and powerful.
        <Pricing
          text="Pricing"
          emoji="👇"
          onClick={() => {
            if (window !== undefined) {
              const element = document.getElementById('pricing');
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        />
      </Bread>
    </Text>
  </Content>
</Container>;

export default Header;
