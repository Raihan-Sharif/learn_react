/* eslint-disable react/prefer-stateless-function */
import React from 'react';

// const element = React.createElement('h1', { className: 'HeaderClass' }, 'Hello World!');
const tabIndex = 0;
// Example: start- functional Component
// function UserElement({ user, locale }) {
//     return (
//         <h1 className="HeaderClass" tabIndex={tabIndex}>
//             <span> Hello {user}!</span>
//             <h5>{new Date().toLocaleString(locale)}</h5>
//             <img src="" alt="opps!" />
//         </h1>
//     );
// }
// Example: End - functional Component

// Example: start- class Component
class UserElement extends React.Component {
    render() {
        const { locale, children } = this.props;
        return (
            <div className="HeaderClass" tabIndex={tabIndex}>
                <h2> Hello {children}!</h2>
                <h5>{new Date().toLocaleString(locale)}</h5>
                <img src="" alt="opps!" />
            </div>
        );
    }
}
// Example: End - class Component

/*
{
  type:'h1',
  props:{
    className:'HeaderClass',
    tabIndex:0,
    children:[
      {
        type:'span',
        props:{
          children:'Hello World!'
        }
      },
          {
        type:'img',
        props:{
          src:'',
          alt:'Hello'
        }
      }
    ]
  }
}
*/
// console.log(element);

/* <UserElement user="Raihan" locale="bn-BD" /> */

// ReactDom.render(<UserElement locale="bn-BD">Raihan</UserElement>, document.getElementById('root'));
