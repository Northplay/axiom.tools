import React from 'react';
import Head from 'next/head';
import { reactChildren } from '../lib/defaultProptypes';

const Main = ({ children }) => <div>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
  </Head>
  <div>
    {children}
  </div>
</div>;

Main.propTypes = {
  children: reactChildren.isRequired,
};

export default Main;
