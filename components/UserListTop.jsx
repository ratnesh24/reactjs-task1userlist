import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
class UserList extends Component {


    state = {
        users: null,
        total: 1,
        per_page: 1,
        current_page: 1
    }


    componentDidMount() {
        this.makeHttpRequestWithPage(1);
    }


    makeHttpRequestWithPage = async pageNumber => {
        const response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        this.setState({
            users: data.data,
            total: data.total,
            per_page: data.per_page,
            current_page: data.page
        });
    }
    render() {

        let users, renderPageNumbers;

        if (this.state.users !== null) {
            users = this.state.users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td><img src={user.avatar} alt={user.first_name} style={{ height: '5rem', width: '5rem', }} /></td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td><Link to={`/users/${user.id}`} className="btn text-white">View</Link></td>
                </tr >
            ));
        }

        const pageNumbers = [];
        if (this.state.total !== null) {
            for (let i = 1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
                pageNumbers.push(i);
            }


            renderPageNumbers = pageNumbers.map(number => {
                let classes = this.state.current_page === number ? 'active' : '';

                return (
                    <li key={number}
                        className={classes}
                        onClick={() => this.makeHttpRequestWithPage(number)}>
                        {number}
                    </li>
                );
            });
        }

        return (


            <>
                <Header />
                <h1 className="title">User List</h1>
                <table className="table" border="0" cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Avatar</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users}
                    </tbody>
                </table>

                <div className="pagination">
                    <ul>
                        {/* <li onClick={() => this.makeHttpRequestWithPage(1)}>&laquo;</li> */}
                        {renderPageNumbers}
                        {/* <li onClick={() => this.makeHttpRequestWithPage(2)}>&raquo;</li> */}
                    </ul>
                </div>

            </>
        );
    }

}

export default UserList;