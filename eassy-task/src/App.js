import React, { Component,Fragment } from 'react';
import styled from 'styled-components';
import ButtonCss from './ButtonCss';

class App extends Component {
  render() {
    return (
      <Container>
        <ButtonCss />
        <Fragment>
          <p>2. styled-components 사용</p>
          <Button >input</Button>
          <Button edit>edit</Button>
          <DeleteButton>delete</DeleteButton>
        </Fragment>
      </Container>
    );
  }
}

const Container = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
  // height: 100vh;
  width: 500px;
  margin: 0 auto;
  text-align: center;
`

const Button = styled.button`
  padding: 5px 13px;
  margin: 0 5px;
  border-radius: 13px;
  border-style: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${props => (props.edit ? "#9775fa" : "#1098ad")};
`

const DeleteButton = styled.button`
  padding: 5px 13px;
  margin: 0 5px;
  border-radius: 13px;
  border-style: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background-color: #fa5252;
`


export default App;