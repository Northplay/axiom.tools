import React from 'react';

import Main from '../layouts/main';

import Header from '../components/header';
import Article from '../components/article';
import Apps from '../components/apps';
import Pricing from '../components/pricing';
import Northplay from '../components/northplay';
import Footer from '../components/footer';

const FrontPage = () => <Main>
  <Header />
  <Article />
  <Apps />
  <Pricing />
  <Northplay />
  <Footer />
</Main>;

export default FrontPage;
