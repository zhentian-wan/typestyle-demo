import { style, classes } from 'typestyle';
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
const baseClassName = style(
    {
        color: 'green',
    },
    fontSize(15)
);
const errorClassName = style({
        color: 'red'
    },
    fontSize(12)
);


const Section = ({children, hasError, className}: {
    children?: any, hasError?: boolean, className?: string
}) => (
    <div className={classes(
        baseClassName,
        className,
        hasError && errorClassName
    )}>
        {children}
    </div>
);

const App = () => (
    <div>
        <Section className={style({backgroundColor: 'pink'})}>Success</Section>
        <Section className={style({backgroundColor: 'yellow'})} hasError={true}>Error</Section>
    </div>

);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);