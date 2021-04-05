import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux"
// import { persistStore } from 'redux-persist'
// import { PersistGate } from 'redux-persist/integration/react'
// import storage from 'redux-persist/lib/storage'
import reducer from './reducers/reducer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './index.css';
import HomePage from './components/homepage/HomePage'
import Register from './components/register/register'
import Login from './components/login/login'
import Post from './components/post/post'
// import UserProfile from './components/user/profile';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer);
// const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <Router>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/signup"} component={Register} />
        <Route exact path={"/authenticate"} component={Login} />
        <Route exact path={"/add_post"} component={Post} />
        {/* <Route exact path={"/user_profile"} component={UserProfile} /> */}
        <Route render={() => <h1>Path not found!</h1>} />
        <HomePage />
      </Switch>
    </Router>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
