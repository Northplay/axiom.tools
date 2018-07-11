import React from 'react';
import styled from 'styled-components';
import Router from 'next/router'

import Button from '../shared/button';
import { StyledContainer, StyledContent } from '../../lib/styles';

const Container = styled(StyledContainer)`
  background-color: #f2f7fb;
  padding: 60px 0;
`;

const Content = styled(StyledContent)`
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 1220px;
`;

const Title = styled.h2`
  font-size: 33px;
  line-height: 1.4em;
  text-transform: uppercase;
  text-align: center;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 1.4em;
  margin: 40px 0;
  text-align: center;
  max-width: 960px;
`;

const Models = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: row;
  margin: 20px 0;
`;

const Model = styled.div`
  flex: 0 1 26.5%;
  background-color: #fff;
  box-shadow: 0px 15px 25px 0px rgba(19, 56, 255, 0.15);
  display: flex;
  flex-flow: column nowrap;
  padding: 30px;
  align-items: center;
`;

const AppleTV = styled.img``;
const ModelImage = styled.img`
  margin: 20px 0;
`;

const Features = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Feature = styled.div`
  width: 100%;
  color: #848484;
  font-size: 20px;
  line-height: 1.4em;
  margin-bottom: 5px;
`;

const XContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  width: 100%;
`;

const XSplitter = styled.img`
  width: 41px;
  height: 28px;
`;

const Price = styled.div`
  width: 100%;
  font: 700 16px/1.2em futura-pt-bold, Helvetica Neue, Helvetica, sans-serif;
  text-align: center;
`;

const Addons = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 15px 25px 0px rgba(19, 56, 255, 0.15);
  display: flex;
  flex-flow: column nowrap;
  margin: 60px 0;
`;

const AddonTitle = styled.h3`
  font-size: 16px;
  line-height: 1.1em;
  margin-left: 20px;
  margin-top: 20px;
`;

const AddOnItems = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const AddOn = styled.div`
  flex: 0 1 25%;
  margin: 40px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
`;

const Computer = styled.img`
  height: 95px;
  width: 103px;
`;

const AddonName = styled.div`
  font: 700 16px/1.2em futura-pt-bold, Helvetica Neue, Helvetica, sans-serif;
  margin-top: 40px;
  margin-bottom: 5px;
`;

const Together = styled.p`
  font-size: 20px;
  line-height: 1.3em;
  color: #232322;
  text-align: center;
`;

const Contact = styled(Button)`
  background-color: #18c9f9;
  background: linear-gradient(0.25turn, #7800dd, #0d7bff, #00ffff);
  margin: 60px;
`;

const Pricing = () => <Container>
  <Content>
    <Title>
      Pricing
    </Title>
    <Text>
      One of the biggest advantages of using a system like Axiom to built your product is that we can stand on the shoulders of previous integrations and deliver native solutions in weeks rather than months. Here’s some time and price examples of our Axiom powered solutions.
    </Text>
    <Models>
      <Model>
        <AppleTV src="/static/pricing-tv-mvp.png" width="107" height="56" />
        <ModelImage src="/static/pricing-model-mvp.png" width="156" height="101" />
        <Features>
          <Feature>
            Front Page(s)
          </Feature>
          <Feature>
            Detail pages (Series, Episode &amp; Movie)
          </Feature>
          <Feature>
            Player &amp; Playback
          </Feature>
          <Feature>
            Standard analytics (Google, Firebase, Mixpanel or Fabric)
          </Feature>
          <Feature>
            Search &amp; Login
          </Feature>
        </Features>
        <XContainer>
          <XSplitter src="/static/pricing-x.png" />
        </XContainer>
        <Price>
          Development 2 weeks
          <br />
          Starting from 15k USD
        </Price>
      </Model>
      <Model>
        <AppleTV src="/static/pricing-tv-advanced.png" width="122" height="71" />
        <ModelImage src="/static/pricing-model-advanced.png" width="156" height="101" />
        <Features>
          <Feature>
            MVP
          </Feature>
          <Feature>
            Sign up (with free trial)
          </Feature>
          <Feature>
            Token-based login
          </Feature>
          <Feature>
            Add to list or Favorites
          </Feature>
          <Feature>
            Binge-watching
          </Feature>
          <Feature>
            Resume playback
          </Feature>
        </Features>
        <XContainer>
          <XSplitter src="/static/pricing-x.png" />
        </XContainer>
        <Price>
          Development 5 weeks
          <br />
          Starting from 35k USD
        </Price>
      </Model>
      <Model>
        <AppleTV src="/static/pricing-tv-ultimate.png" width="141" height="89" />
        <ModelImage src="/static/pricing-model-ultimate.png" width="156" height="101" />
        <Features>
          <Feature>
            MVP + Advanced
          </Feature>
          <Feature>
            Live Channels with Playback
          </Feature>
          <Feature>
            Subscriptions through IAP
          </Feature>
          <Feature>
            Custom Analytics (Adobe, Gallup, etc)
          </Feature>
          <Feature>
            Parental Controls
          </Feature>
          <Feature>
            Custom Features
          </Feature>
        </Features>
        <XContainer>
          <XSplitter src="/static/pricing-x.png" />
        </XContainer>
        <Price>
          Development 7+ weeks
          <br />
          Starting from 50k USD
        </Price>
      </Model>
    </Models>
    <Addons>
      <AddonTitle>
        Add Ons
      </AddonTitle>
      <AddOnItems>
        <AddOn>
          <Computer src="/static/pricing-addon-design.png" />
          <AddonName>
            Design Package
          </AddonName>
          <Features>
            <Feature>
              App Icon
            </Feature>
            <Feature>
              App Store Screenshots
            </Feature>
            <Feature>
              Screen Design in Brand Style
            </Feature>
          </Features>
          <XContainer>
            <XSplitter src="/static/pricing-x.png" />
          </XContainer>
          <Price>
            Design 1 week
            <br />
            Starting from 7k USD
          </Price>
        </AddOn>
        <AddOn>
          <Computer src="/static/pricing-addon-review.png" />
          <AddonName>
            App Store Submission
          </AddonName>
          <Features>
            <Feature>
              Acceptance &amp; Regression Testing
            </Feature>
            <Feature>
              Production Build
            </Feature>
            <Feature>
              Upload to App Store Connect
            </Feature>
          </Features>
          <XContainer>
            <XSplitter src="/static/pricing-x.png" />
          </XContainer>
          <Price>
            Development 1 day
            <br />
            Starting from 1.3k USD
          </Price>
        </AddOn>
        <AddOn>
          <Computer src="/static/pricing-addon-other.png" />
          <AddonName>
            Other
          </AddonName>
          <Features>
            <Feature>
              Consulting &amp; Advising
            </Feature>
            <Feature>
              Marketing
            </Feature>
            <Feature>
              Branding Design
            </Feature>
          </Features>
          <XContainer>
            <XSplitter src="/static/pricing-x.png" />
          </XContainer>
          <Price>
            Hourly rate 1000 DKK ex moms
            <br />
            (or 160 USD)
          </Price>
        </AddOn>
      </AddOnItems>
    </Addons>
    <Together>
      Together and with the help of Axiom we can build much better products for the Apple TV
    </Together>
    <Contact
      onClick={() => { Router.push('mailto:hey@northplay.co?subject=Axiom'); }}
      text="Contact us for a free estimate"
    />
  </Content>
</Container>;

export default Pricing;
