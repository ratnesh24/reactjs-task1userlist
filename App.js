import React from "react";
import "./css/App.scss";
import Login from "./components/Login";
import Logout from "./components/Logout";
//import Header from './components/Header'
import Footer from "./components/Footer";
import UserListTop from "./components/UserListTop";
import UserDetail from "./components/UserDetail";
import Home from "./Home";
import Error404 from "./404";
import Protected from "./components/Protected";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  // let isLogin = JSON.parse(localStorage.getItem('isLogin'))
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Route exact default path="/Login" component={Login} />
      <Route path="/logout" component={Logout} />
      {/* <Route exact path="/home" component={Home} />
      <Route exact path="/users" component={UserListTop} />
      <Route exact path="/users/:userID" component={UserDetail} />
      <Route exact path="/404" component={Error404} /> */}

      <Protected exact path="/" component={Home} />
      <Protected exact path="/users" component={UserListTop} />
      <Protected exact path="/users/:userID" component={UserDetail} />
      <Protected exact path="/404" component={Error404} />
      {/* <Switch>
        {
          isLogin ?
            <>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/users" component={UserListTop} />
              <Route exact path="/users/:userID" component={UserDetail} />
              <Route exact path="/404" component={Error404} />
            </>
            :
            <>
              <Route exact default path="/" component={Login} />
            </>
        }
      </Switch> */}
      <Footer />
    </BrowserRouter>
  );
}
export default App;
