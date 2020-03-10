import React, {Component} from 'react';

class TOC extends Component {
    render() {
      console.log('TOC render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a href={"/content/"+data[i].id}
            // data-id = {data[i].id} bind에 두번째 인자값으로 넣을 수 있음
            onClick = {function(id, e){
            e.preventDefault();
            this.props.onChangePage(id);
          }.bind(this, data[i].id)}>
          {data[i].title}
          </a>
        </li>);
        i = i + 1;
      }
      return(
        <nav>
          <ul>
           {lists}
          </ul>
        </nav>
      );
    }
  }
  
  export default TOC;