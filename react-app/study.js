Control 파일 생성 후 App.js에 연결해주는 코드
 + import Control from "./components/Control";

 Control.js
 <ul>
    <li><a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>
    <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
        }.bind(this)}>update</a></li>
    <li><input onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
        }.bind(this)}type="button" value="delete"></input></li>  //delete버튼은 페이지 이동을 할 경우 치명적인 오류가 발생할 수 있으므로 버튼으로 만들어줌
</ul>

⭐️Control 컴퍼넌트에 만들어진 값들을 클릭할 때에 mode가 바뀌게 해주는 코드
<Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}>
</Control>  