import React from 'react';
import './css/App.scss';
import Login from './components/Login';
import Header from './components/Header'
import Footer from './components/Footer'
import UserListTop from './components/UserListTop'
import UserDetail from './components/UserDetail';
import Home from './Home';
import Error404 from './404';


import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact default strict path="/" component={Login} />
        <Route exact default strict path="/login" component={Login} />
        <Route exact default strict path="/home" component={Home} />
        <Route exact path="/users" component={UserListTop} />
        <Route exact path="/users/:userID" component={UserDetail} />
        <Route exact path="/404" component={Error404} />
      </Switch>
      <Redirect to="/" />
      <Footer />
    </Router >
  );
}

export default App;
