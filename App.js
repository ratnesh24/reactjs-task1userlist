import React from 'react';
import './css/App.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Home';
//import UserList from './UserList';
import UserListTop from './UserListTop'
import UserDetail from './UserDetail';
import Error404 from './404';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UserListTop} />
        <Route exact path="/users/:userID" component={UserDetail} />

        <Route exact path="/404" component={Error404} />
      </Switch>
      {/* <Redirect to="/404" /> */}
      <Footer />
    </Router >
  );
}

export default App;
