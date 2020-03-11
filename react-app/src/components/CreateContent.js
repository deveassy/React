import React, {Component} from 'react';

class CreateContent extends Component {
    render() {
      console.log('CreateContent render');
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault(); // onSubmit의 기능인 action의 페이지로 연결되는 고유한 기능을 방지해주기 위함(페이지 리로드 방지)
              this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value
              );
            }.bind(this)}>
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea name="desc" placeholder="description"></textarea></p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      )
    }
  }

  export default CreateContent;