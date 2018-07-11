import React from 'react';
import reset from 'styled-reset';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

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

export default class DefaultDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/nvu4ibp.css" />
        {this.props.styleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>;
  }
}
