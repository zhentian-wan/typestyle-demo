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
    {
        color: 'red',
        transition: 'font-size 0.2s',
        $nest: {
            '&:focus': {backgroundColor: 'green'},
            '&:hover': fontSize(50),
            /** iphone */
            '@media screen and (-webkit-min-device-pixel-ratio: 2)': {
                backgroundColor: 'blue'
            }
        }
    },
    media({maxWidth: 700, minWidth: 500}, fontSize(20)),
    media({minWidth: 701}, fontSize(30)),
    media({maxWidth: 499}, fontSize(15))
);

ReactDOM.render(
    <button className={className}>
        Hello Typestyle
    </button>,
    document.getElementById('root')
);