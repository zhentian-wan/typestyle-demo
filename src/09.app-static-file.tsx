import {style, getStyles} from "typestyle";
import * as React from "react";

const className = style({
  color: 'red',
  fontSize: '30px'
});

const App = () =>
    <div className={className}>
      Hello World!
    </div>;

import * as ReactDOMServer from 'react-dom/server';
const html = ReactDOMServer.renderToStaticMarkup(<App />);
const css = getStyles();

const renderPage = ({html, css}) => `
  <html>
    <header>
        <style>${css}</style>
    </header>
    <body>
        <div>${html}</div>
    </body>
  </html>
`;
const renderedPage = renderPage({html, css});
import * as fs from 'fs';
fs.writeFileSync(__dirname + '/index.html', renderedPage);
