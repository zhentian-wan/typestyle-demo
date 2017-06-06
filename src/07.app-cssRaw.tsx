import {cssRaw} from 'typestyle';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

cssRaw(`
    body {
        font-size: 1.5em;
        font-weight: bold;
        background-color: black;
        color: gold
    }
`);

const App = () => (
    <div>
        Hello World!
    </div>

);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);