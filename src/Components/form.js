import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            courseName: '',
            message: '',
            isActive: false,
            postData: {},
        };
    }

    handleChange = (e) => {
        console.log(e);
        if (
            e.target.type === 'text' ||
            e.target.type === 'textarea' ||
            e.target.type === 'select-one'
        ) {
            this.setState({
                [e.target.name]: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                [e.target.name]: e.target.checked,
            });
        }
    };

    handleFormSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        const { userName, courseName, message, isActive } = this.state;
        const postData = {
            userName,
            courseName,
            message,
            isActive,
        };
        this.setState({ postData });
        // console.log('post Data: ', postData);
    };

    render() {
        const { userName, courseName, message, isActive, postData } = this.state;
        let postDataShow = '';
        console.log('post Data: ', postData);
        if (Object.keys(postData).length !== 0 && postData.constructor === Object) {
            postDataShow = `<table>
        <tr>
            <td>Name : </td>
            <td>${postData.userName}</td>
        </tr>

        <tr>
            <td>Course Name : </td>
            <td>${postData.courseName}</td>
        </tr>

        <tr>
            <td>Message : </td>
            <td>${postData.message}</td>
        </tr>

        <tr>
            <td>Is Active : </td>
            <td>${postData.isActive}</td>
        </tr>
    </table>`;
        }
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        type="text"
                        name="userName"
                        value={userName}
                        placeholder="Enter Your Name Here..."
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <select name="courseName" value={courseName} onChange={this.handleChange}>
                        <option value="">--Select--</option>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br />
                    <br />
                    <textarea
                        name="message"
                        value={message}
                        placeholder="Type your message here..."
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input
                        type="checkbox"
                        name="isActive"
                        checked={isActive}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: postDataShow }} />
                </form>
            </div>
        );
    }
}
