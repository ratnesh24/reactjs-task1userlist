import React from 'react';
import './css/App.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Home';
import UserList from './UserList';
import UserDetail from './UserDetail';
import Error404 from './404';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>

      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UserList} />
      <Route exact path="/users/:userID" component={UserDetail} />

      <Route exact path="/404" component={Error404} />
      {/* <Redirect to="/404" /> */}
      <Footer />
    </Router >
  );
}

export default App;
