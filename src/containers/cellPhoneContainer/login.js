import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUsername } from '../../actions';
import store from '../../store';

class UsernamePrompt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  createUsername(e){
    e.preventDefault()
    this.props.createUsername(this.state)
    this.setState({ username: '' })
  }

  addUsername(e){
    this.setState({ username: e.target.value })
  }

  render() {
    return (
    <div className="cellPhoneContainer">
       <div className="messageBox">
          <h2 className="messageUsername">Enter your username</h2>
      </div>
      <textarea className="chatInput" placeholder="" value={ this.state.username } onChange={ this.addUsername.bind(this) }>
      </textarea>
      <button type="submit" className="sendButton" onClick={ this.createUsername.bind(this) }>Send Message
      </button>
    </div>
      )
  }
}
const mapStateToProps = (state) => {
  return {
    messages: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUsername: (message) => {
      dispatch(createUsername(message))
    }
  }
}

UsernamePrompt = connect(
  mapStateToProps,
  mapDispatchToProps
  )(UsernamePrompt)

export default UsernamePrompt;
