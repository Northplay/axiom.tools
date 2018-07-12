import React from 'react';
import Head from 'next/head';
import reset from 'styled-reset';
import { injectGlobal } from 'styled-components';

import { reactChildren } from '../lib/defaultProptypes';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${reset}

  body {
    font: 300 16px/1em lato, Helvetica Neue, Helvetica, sans-serif;
    -webkit-font-smoothing: antialized;
  }

  h1, h2, h3, h4, h5, button, a {
    font: 700 16px/1em futura-pt-bold, Helvetica Neue, Helvetica, sans-serif;
  }

  a, button, input[type="submit"] {
    cursor: pointer;
  }
`;

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
