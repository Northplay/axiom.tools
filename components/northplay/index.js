import React from 'react';
import styled from 'styled-components';
import Router from 'next/router'

import Button from '../shared/button';
import { StyledContainer, StyledContent } from '../../lib/styles';

const Container = styled(StyledContainer)`
  background-color: #4b41eb;
  padding: 140px 0;
`;

const Content = styled(StyledContent)`
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
  max-width: 1080px;
`;

const Logo = styled.img`
  height: 273px;
  width: 276px;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 33px;
  line-height: 1.4em;
  text-transform: uppercase;
  margin-top: -50px;
`;

const Text = styled.p`
  color: #fff;
  font-size: 20px;
  line-height: 1.4em;
  text-align: center;
  margin-top: 25px;
`;

const Contact = styled(Button)`
  background-color: #ffef3f;
  color: #273ea2;
  box-shadow: 0px 5px 20px 10px rgba(255, 239, 63, 0.05);
  margin-top: 50px;

  &:hover {
    box-shadow: 0px 5px 20px 10px rgba(255, 239, 63, 0.08);
  }
`;

const Northplay = () => <Container>
  <Content>
    <Logo src="/static/northplay-bear.png" />
    <Title>
      We are Northplay
    </Title>
    <Text>
      We’re a small passionate team of award winning developers from Copenhagen.
      <br />
      We have 15 years of experience building digital products. with both big and small clients, local and international.
      <br />
      Our passion is entertainment design, games and experiences on the big screen.
    </Text>
    <Contact
      onClick={() => { Router.push('https://northplay.co/'); }}
      text="Learn more about us"
      emoji="👋"
    />
  </Content>
</Container>;

export default Northplay;

