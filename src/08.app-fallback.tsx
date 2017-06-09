import { style, cssRaw, types } from "typestyle";
import * as React from "react";
import * as ReactDOM from "react-dom";

cssRaw(`
    body {
        font-size: 1.5em;
        font-weight: bold;
        color: gold
    }
`);

const scroll: types.NestedCSSProperties = {
  "-webkit-overflow-scrolling": "touch",
  overflow: "auto"
};

const bg = style(scroll, {
  backgroundColor: [
    /* The fallback */
    "rgb(200, 54, 54)",
    /** Graceful upgrade */
    "rgba(200, 54, 54, 0.5)"
  ]
});

const App = () =>
  <div className={bg}>
    Hello World!
  </div>;

ReactDOM.render(<App />, document.getElementById("root"));
