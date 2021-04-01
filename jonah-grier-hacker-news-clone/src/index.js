import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import HomePage from './Components/Homepage/HomePage'
import Register from './Components/Register/register';
import Authentication from './Components/Authentication/Authentication'
import Login from './Components/Login/login'
import Post from './Components/Post/post'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/signup"} component={Authentication} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/add_post"} component={Post} />
        {/* <Route exact path={"/add_comment"} component={Post} /> */}
        {/* <Route exact path={"/blog_post/:id"} component={Post} /> */}
        <Route render={() => <h1>Path not found!</h1>} />
        <HomePage />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
