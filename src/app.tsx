import { style, media } from 'typestyle';
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
    {color: 'red', transition: 'font-size 0.2s'},
    media({maxWidth: 700, minWidth: 500}, fontSize(20)),
    media({minWidth: 701}, fontSize(30)),
    media({maxWidth: 499}, fontSize(15))
);

ReactDOM.render(
    <div className={className}>
        Hello Typestyle
    </div>,
    document.getElementById('root')
);