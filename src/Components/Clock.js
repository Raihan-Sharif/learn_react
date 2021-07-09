/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './button';

class Clock extends React.Component {
    // in this constructot need when we use props to initialize our state. here it's not essential. super(props) use for call base class constructor with this props value.
    constructor(props) {
        super(props);
        this.state = { date: new Date(), locale: this.props.locale };
        // we can bind our class function here in constructor loading. and it's refer another function which take this keyword. so we can access this class object from this function.
        // this.applyLocale = this.applyLocale(this);
    }

    // this life cycle hook called after create/render element in dom.
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    // this life cycle hook called before component unmount/remove
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    changeLocale = (e) => {
        this.setState({ selectLocale: e.target.value });
    };

    applyLocale = (locale) => {
        this.setState({ locale });
    };

    tick = () => {
        this.setState({ date: new Date() });
    };

    // this function is react component function to render or display elements
    render() {
        console.log('Clock component render.');
        const { locale = 'bn-BD', selectLocale = 'en-US' } = this.state;
        return (
            <div>
                <h2>{this.state.date.toLocaleString(locale)}</h2>
                <select name="locale" vlaue={selectLocale} onBlur={this.changeLocale}>
                    <option value="en-US">Engilsh-USA</option>
                    <option value="bn-BD">Bangla-Bangladesh</option>
                    <option value="hi-IN">Hindi-India</option>
                    <option value="pa-PK">Punjabi-Pakistan</option>
                </select>
                <Button btnFunc={this.applyLocale} param={selectLocale} />
            </div>
        );
    }
}
export default Clock;
