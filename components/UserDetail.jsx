import React from "react";
//import preloader from "./img/preloader.svg";
import { Redirect, withRouter } from 'react-router-dom';

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: null,
            error: null,
            page: null
        };
    }
    componentDidMount() {
        fetch("https://reqres.in/api/users/" + this.props.match.params.userID)
            .then(response => response.json())
            .then(dataDetails => {
                console.warn(dataDetails.data)
                dataDetails.data
                    ? this.setState({
                        details: [dataDetails.data],
                        error: false,
                        // page: this.props.userID
                    })
                    : this.setState({
                        error: true
                    });
            });
    }

    render() {
        return (
            this.state.error
                ? (
                    <Redirect to="/404" />
                )
                : (

                    <>
                        <h1 className="title" style={{ marginTop: "5rem" }}>
                            User Detail for ID: {this.props.match.params.userID}
                        </h1>
                        <ul className="UserList">
                            {this.state.details
                                ? this.state.details.map((item, i) => (
                                    <li key={i}>
                                        <span className="id">{item.id}</span>
                                        <img src={item.avatar} alt={item.first_name} />
                                        <div className="details">
                                            <strong>
                                                {item.first_name} {item.last_name}
                                            </strong>
                                            <a href="mailto:{item.email}">{item.email}</a>
                                        </div>
                                    </li>
                                ))
                                :
                                null}
                        </ul>
                    </>
                )
        );
    }
}
export default withRouter(UserDetail);
