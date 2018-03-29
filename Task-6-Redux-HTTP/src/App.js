import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import './index.css';

const users = [
  "ivchenkodima",
  "maksdk",
  "burlachenkovv",
  "this_user_does_not_exists_test_errors"  
];

let UserList = ({list}) => {
  let result = null;

  if(list.length) {
    result = list.map((item) => {
      return (
        <div key={item.id} className="thumbnail">
          <img src={item.avatar} />
          <h2>{item.login}</h2>

          <div className="data">
            {
              (item.name)
                ? <p>
                    <b>Name:</b> {item.name}
                  </p>
                : null
            }
            {
              (item.repositories)
                ? <p>
                    <b>Repositories:</b> {item.repositories}
                  </p>
                : null
            }
            {
              (item.followers)
                ? <p>
                    <b>Followers:</b> {item.followers}
                  </p>
                : null
            }
            {
              (item.created)
                ? <p>
                    <b>Created: </b> 
                    {new Date(item.created).toLocaleString()}
                  </p>
                : null
            }
          </div>
        </div>
      )
    });
  }

  return <div className="flex">{result}</div>;
}

class App extends Component {
  handleClick() {
    users.map((item) => {
      axios.get(`https://api.github.com/users/${item}`)
        .then(({data}) => {
          let dataForStorage = {
            id: data.id,
            avatar: data.avatar_url,
            name: data.name,
            login: data.login,
            repositories: data.public_repos,
            followers: data.followers,
            created: data.created_at
          };

          this.props.users(dataForStorage);
        })
        .catch((error) => {
          let errorForStorage = {
            user: item,
            error: error.message
          };

          this.props.errors(errorForStorage);
        })
    });
  }

  render() {
    return (
      <div>
        <button className="harvester" onClick={this.handleClick.bind(this)}>Get data from GitHub</button>

        <UserList list={this.props.dataFromStorage.users} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataFromStorage: state
});

const mapDispatchToProps = dispatch => ({
  users: (user) => 
    dispatch({
      type: "ADD_USERS",
      payload: user
    }),
  errors: (error) =>
    dispatch({
      type: "ADD_ERRORS",
      payload: error
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);