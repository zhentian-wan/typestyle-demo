import { style } from 'typestyle';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const fontSize = (value: number | string) => {
    const valueStr = typeof value === 'string' ?
                     value :
                     value + 'px';
    return {
        fontSize: valueStr
    }
};
const className = style(
    fontSize('3em'),
    {color: 'red'}
);

ReactDOM.render(
    <div className={className}>
        Hello Typestyle
    </div>,
    document.getElementById('root')
);