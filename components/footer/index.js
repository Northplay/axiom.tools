import React from 'react';
import styled from 'styled-components';

import { StyledContainer, StyledContent } from '../../lib/styles';

const Container = styled(StyledContainer)`
  background-color: #232322;
  padding: 60px 0 120px 0;
`;

const Content = styled(StyledContent)`
  color: #818181;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const About = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 800px) {
    flex: 0 1 auto;
    margin-bottom: 75px;
    flex-direction: column;
    align-items: center;
  }
`;

const Bear = styled.img`
  flex: 0 0 98px;
  height: 94px;
  width: 98px;

  @media (max-width: 800px) {
    flex: unset;
    margin-bottom: 30px;
  }
`;

const Details = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  @media (max-width: 800px) {
    margin: 0;
    align-items: center;
    text-align: center;
  }
`;

const Name = styled.h4`
  font-size: 24px;
  line-height: 1em;
  margin-bottom: 5px;
`;

const Address = styled.p`
  font-size: 15px;
  line-height: 1.4em;
`;

const Social = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 800px) {
    flex: 1 1 100%;
    align-items: center;
  }
`;

const Link = styled.a`
  color: #818181;
  font-size: 28px;
  line-height: 1.4em;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: opacity 0.15s ease;

  &:first-child {
    margin-bottom: 15px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const SocialBird = styled.img`
  height: 32px;
  width: 39px;
  margin-right: 15px;
  margin-left: 4px;
`;

const SocialPlane = styled.img`
  height: 32px;
  width: 44px;
  margin-right: 15px;
`;

const Footer = () => <Container>
  <Content>
    <About>
      <Bear src="/static/northplay-logo.png" />
      <Details>
        <Name>Northplay ApS</Name>
        <Address>
          Pilestræde 43, 1. sal<br />
          1112 Copenhagen K<br />
          Denmark
        </Address>
      </Details>
    </About>
    <Social>
      <Link href="https://twitter.com/heynorthplay/">
        <SocialBird src="/static/social-bird.png" />
        @heynorthplay
      </Link>
      <Link href="mailto:hey@northplay.co?subject=Axiom">
        <SocialPlane src="/static/social-plane.png" />
        hey@northplay.co
      </Link>
    </Social>
  </Content>
</Container>;

export default Footer;
