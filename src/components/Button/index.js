import React from 'react';
// import React, { Component } from 'react';

import './styles.css';

// class Button extends Component {
//   render() {
//     return (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href={props.link}
//       >
//         {props.title}
//       </a>
//     )
//   }
// }

const Button = (props) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.link}
    >
      {props.title}
    </a>
  )
}

// function Button() {
//   return (
//     <a
//       target="_blank"
//       rel="noopener noreferrer"
//       href={props.link}
//     >
//       {props.title}
//     </a>
//   )
// }

export default Button;