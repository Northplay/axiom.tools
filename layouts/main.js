import React from 'react';
import Head from 'next/head';
import reset from 'styled-reset';
import styled, { injectGlobal } from 'styled-components';

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

const Container = styled.div`
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
`;

const Main = ({ children }) => <div>
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

    <title>Axiom</title>

    <meta name="description" content="A framework for better streaming Apple TV Apps" />
    <meta name="google-site-verification" content="oA5UKv_3jX3wjJDQBm1ahC6FjkPY-cvKurWawTbRhHY" />

    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
    <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />

    <meta property="og:title" content="Axiom" />
    <meta property="og:description" content="A framework for better streaming Apple TV Apps" />
    <meta property="og:image" content="/static/shareimage.png" />
    <meta property="og:url" content="https://axiom.tools" />

    <meta name="twitter:image" content="/static/shareimage.png" />
    <meta name="twitter:site" content="@heynorthplay" />
    <meta name="twitter:title" content="Axiom" />
    <meta name="twitter:description" content="A framework for better streaming Apple TV Apps" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
  <div>
    {children}
  </div>
</div>;

Main.propTypes = {
  children: reactChildren.isRequired,
};

export default Main;
