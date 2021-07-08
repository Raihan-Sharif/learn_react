/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Clock extends React.Component {
    // in this constructot need when we use props to initialize our state. here it's not essential. super(props) use for call base class constructor with this props value.
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // this life cycle hook called after create/render element in dom.
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    // this life cycle hook called before component unmount/remove
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    // this function is react component function to render or display elements
    render() {
        const { locale } = this.props;
        return <h2>{this.state.date.toLocaleString(locale)}</h2>;
    }
}
export default Clock;
