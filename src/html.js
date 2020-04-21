import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

class HTML extends React.Component {
  render() {
    const {
      htmlAttributes,
      headComponents,
      bodyAttributes,
      preBodyComponents,
      body,
      postBodyComponents
    } = this.props;

    let css;
    if (process.env.NODE_ENV === `production`) {
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />;
    }
    return (
      <html {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {headComponents}
          {css}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html:
                '(window.adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-3645221790882323", enable_page_level_ads: true});'
            }}
          ></script>
        </body>
      </html>
    );
  }
}

export default HTML;
