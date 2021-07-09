import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // shouldComponentUpdate life cycle hook call before component update.here we can check our new props & state with previous props & state. it's retrun true/false , if false then component will not update. it helpful when we want to prevent rerender our component. but beware of using it.
    shouldComponentUpdate(nextProps) {
        const { param: curLocale, btnFunc: curFunc } = this.props;
        const { param: nextLocale, btnFunc: nextFunc } = nextProps;
        if (curLocale === nextLocale && curFunc === nextFunc) {
            return false;
        }
        return true;
    }

    render() {
        console.log('button component render.');
        const { btnFunc, param } = this.props;
        return (
            // here this onClick event call a function which send from parent component.
            <button type="button" onClick={() => btnFunc(param)}>
                Click Here
            </button>
        );
    }
}
