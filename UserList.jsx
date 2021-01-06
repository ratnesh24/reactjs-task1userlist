import React from "react";
import { Link } from "react-router-dom";

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentPage: 1,
      total_users: 1,
      listPerPage: 1,
      total_pages: 1,
      api: "https://reqres.in/api/users?page=1"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(event) {
    await this.setState({
      currentPage: Number(event.target.id),
      api: "https://reqres.in/api/users?page=" + event.target.id
    });
    this.fetchData(this.state.api);
  }

  componentDidMount() {
    this.fetchData(this.state.api);
  }

  fetchData = api => {
    fetch(api)
      .then(response => response.json())
      .then(details => {
        this.setState({
          users: details.data,
          //currentPage: details.page,
          total_users: details.total,
          listPerPage: details.per_page,
          total_pages: details.total_pages
        });
      });
  };

  render() {
    const { users, total_users, total_pages } = this.state;
    //console.log(this.state.users);
    //Logic For Displaying current List
    // const indexOfLastList = currentPage * listPerPage;
    // const indexOfFirstList = i   ndexOfLastList - listPerPage;
    // const currentList = users.slice(indexOfFirstList, indexOfLastList);

    //Displaying Page Number
    const pageNumber = [];
    for (let i = 1; i <= total_pages; i++) {
      pageNumber.push(i);
    }

    const renderPageNumber = pageNumber.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <>
        <div className="userlist_main">
          <h1 className="title">
            User list of <em>{total_users} users</em>
          </h1>

          <ul className="UserList">
            {users.length ? (
              users.map((item, i) => {
                const { id, email, first_name, last_name, avatar } = item;
                return (
                  <li key={id}>
                    <span className="id">{id}</span>
                    <Link to={`/user/${id}`}>
                      <img src={avatar} alt={first_name} />
                    </Link>
                    <div className="details">
                      <Link to={`/user/${id}`}>
                        <strong>
                          {first_name} {last_name}
                        </strong>
                      </Link>
                      <Link to={`mailto:${email}`}>{email}</Link>
                    </div>
                  </li>
                );
              })
            ) : (
              <div>No data Available</div>
            )}
          </ul>

          <div className="pagination">
            <ul>{renderPageNumber}</ul>
          </div>
        </div>
      </>
    );
  }
}

export default UserList;
