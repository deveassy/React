import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

function Home() {
  return(
    <div>
      <h2>Home</h2>
        Home...
    </div>
  )
}

function Topics() {
  return(
    <div>
      <h2>Topics</h2>
        Topics...
    </div>
  )
}

function Contact() {
  return(
    <div>
      <h2>Contact</h2>
        Contact...
    </div>
  )
}

function App() {
  return(
    <div>
     <h1>React Router DOM example</h1>
     <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/topics">Topics</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
     </ul>
     <Switch>
       <Route exact path="/"><Home /></Route>
       <Route path="/topics"><Topics /></Route>
       <Route path="/contact"><Contact /></Route>
       <Route path="/">Not found</Route>
     </Switch>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();