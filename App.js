import React from 'react';
import './css/App.scss';
import Login from './components/Login';
import Header from './components/Header'
import Footer from './components/Footer'
import UserListTop from './components/UserListTop'
import UserDetail from './components/UserDetail';
import Home from './Home';
import Error404 from './404';
import Protected from './components/Protected';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact default strict path="/" component={Login} />
        <Route exact default strict path="/login" component={Login} />
        <Route exact path="/home">
          <Protected comp={Home} />
        </Route>
        <Route exact path="/users">
          <Protected comp={UserListTop} />
        </Route>

        <Route exact path="/users/:userID">
          <Protected comp={UserDetail} />
        </Route>
        <Route exact path="/404" component={Error404} />
      </Switch>
      <Redirect to="/" />
      <Footer />
    </Router >
  );
}

export default App;
