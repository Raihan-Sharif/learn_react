import React from 'react';
import reactDom from 'react-dom';

// const element = React.createElement('h1', { className: 'HeaderClass' }, 'Hello World!');
const tabIndex = 0;
const element = (
    <h1 className="HeaderClass" tabIndex={tabIndex}>
        <span> Hello World!</span>
        <img src="" alt="Hello" />
    </h1>
);
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
console.log(element);

reactDom.render(element, document.getElementById('root'));
