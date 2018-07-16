import React from 'react';
import styled from 'styled-components';

import { StyledContainer, StyledContent } from '../../lib/styles';

const Content = styled(StyledContent)`
  color: #232322;
  font-size: 20px;
  line-height: 1.6em;
  flex-flow: column nowrap;
`;

const Header = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 33px;
  line-height: 1.3em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 90px;

  @media (max-width: 420px) {
    flex-wrap: wrap;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

const HeaderBread = styled.span`
  @media (max-width: 420px) {
    flex: 1 0 100%;
    margin: 10px 0;
  }
`;

const AppleTV = styled.img`
  width: 72px;
  height: 71px;
  margin: 0 15px;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Block = styled.div`
  flex: 0 1 45%;
  margin-bottom: 75px;
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 800px) {
    flex: 0 1 100%;
    margin-bottom: 50px;
  }
`;

const Break = styled.div`
  flex: 0 0 100%;
  height: 35px;
`;

const Span = styled.p`
  flex: 0 0 100%;
`;

const Article = () => <StyledContainer>
  <Content>
    <Header>
      <HeaderBread>
        A framework for better
      </HeaderBread>
      <AppleTV src="/static/apple-tv.jpg" />
      <HeaderBread>
        Apps
      </HeaderBread>
    </Header>
    <Text>
      <Block>
        <Span>
          When building some of the most advanced Apple TV solutions in the Nordics we realized something: Most Apple TV apps out there aren’t that great. They don’t follow platform conventions and suffer from restrictions imposed by other platforms.
        </Span>
        <Break />
        <Span>
          To many content providers it is yet another platform they need to support. Solutions are thrown
          together in TVMLKit and create subpar experiences for users. If you’ve used more than a few apps on Apple
          TV, you know what we’re talking about.
        </Span>
        <Break />
        <Span>
          This sucks.
        </Span>
      </Block>
      <Block>
        <Span>
          The tvOS platform has the potential to be one of the most delightful streaming experiences on the big screen.
          So why aren’t content providers taking advantage of this? Because for many, it is a new platform and it is expensive to build for new things.
        </Span>
        <Break />
        <Span>
          This is why we’ve built Axiom. It is a growing template system of reusable components that
          make it much quicker for us to create native delightful solutions featuring your content.
        </Span>
        <Break />
        <Span>
          Here’s some apps we’ve built with Axiom.
        </Span>
      </Block>
    </Text>
  </Content>
</StyledContainer>;

export default Article;
