import React, { Component } from 'react';
import './App.css';

class ButtonCss extends Component {
  render() {
    return (
      <div>
        <p>1. className을 사용한 CSS파일 연결</p>
        <button className="btn btn_input">입력</button>
        <button className="btn btn_edit">수정</button>
        <button className="btn btn_delete">삭제</button>
      </div>
    );
  }
}

export default ButtonCss;