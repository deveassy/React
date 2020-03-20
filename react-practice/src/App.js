import React, { Component, Fragment } from 'react';
// import styled from 'styled-components';
import ButtonCss from './ButtonCss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ButtonCss />
        <div>
          <p>2. styled-components 사용</p>
          <button>input</button>
          <button>edit</button>
          <button>delete</button>
        </div>
      </Fragment>
    );
  }
}

// const Button = styled.button`
//   border-radius: 50px;
//   padding: 5px;
//   min-width: 120px;
//   color: white;
//   font-weight: 600;
//   -webkit-appearance: none;
//   cursor: pointer;
//   &:active,
//   &:focus {
//     outline: none;
//   }
// `

export default App;
