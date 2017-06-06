import {style, keyframes, classes} from 'typestyle';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const fadeAnimationName = keyframes({
    from: {opacity: 0},
    to: {opacity: 1}
});
const fadeAnimationClassName = style({
    animationName: fadeAnimationName,
    animationDuration: '2s'
});

const coloringAnimationName = keyframes({
    '0%': {color: 'black'},
    '50%': {color: 'pink'},
    '100%': {color: 'red'}
});
const fontColoringAnimationClassName = style({
    fontSize: '20px',
    animationName: coloringAnimationName,
    animationDuration: '2s',
    animationIterationCount: 'infinite'
});

const App = () => (
    <div className={classes(
        fadeAnimationClassName,
        fontColoringAnimationClassName
    )}>
        Hello World!
    </div>

);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);