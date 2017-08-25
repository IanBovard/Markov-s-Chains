import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUsername, userConnect } from '../../actions';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  handleCreateUsername(e){
    e.preventDefault()
    this.props.createUsername(this.state)
    this.setState({ username: '' })
    this.props.history.push('/userlist')
  }
  usernameInput(e){
    this.setState({ username: e.target.value })
  }

  componenetDidMount(){
    userConnect();
  }

  render() {
    return (
      <div className="username">
      <input className="chatInput" placeholder="input your username" value={ this.state.username } onChange={ this.usernameInput.bind(this) }>
      </input>
      <button type="submit" className="sendButton" onClick={ this.handleCreateUsername.bind(this)}>Submit
      </button>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUsername: (username) => {
      dispatch(createUsername(username))
    }
  }
}

UserLogin = connect(
  mapStateToProps,
  mapDispatchToProps
  )(UserLogin)

export default UserLogin;