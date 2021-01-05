import React from "react";
import preloader from "./img/preloader.svg";
import { Link } from "react-router-dom";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }

  handleInput = e => {
    e.preventDefault();
    let idValue = e.target.alt;
    console.log("id :" + idValue);
    console.log("alt :" + e.target.alt);
    //some logic
  };

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then(response => response.json())
      .then(details => {
        //console.warn(details.data)
        this.setState({ users: details.data });
      });
  }

  render() {
    if (!this.state.users) {
      return (
        <div className="preLoader">
          <img src={preloader} alt="Loading" />
        </div>
      );
    }

    return (
      <div>
        <h1 className="title">User List</h1>
        <ul className="UserList">
          {this.state.users
            ? this.state.users.map((item, i) => (
                <li key={i}>
                  <span className="id">{item.id}</span>
                  <Link to={`/users/${item.id}`}>
                    <img src={item.avatar} alt={item.first_name} />
                  </Link>
                  <div className="details">
                    <Link to={`/users/${item.id}`}>
                      <strong>
                        {item.first_name} {item.last_name}
                      </strong>
                    </Link>
                    <a href="mailto:{item.email}">{item.email}</a>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }

  // handleClick(e) {
  //     e.preventDefault();
  //     console.log("The link was clicked");
  // }
}
export default UserList;
