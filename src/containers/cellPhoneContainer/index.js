import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messageSend, messageReceived } from '../../actions';

class CellPhoneContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      username: ''
    }
  }

  messageSend(e){
    e.preventDefault()
    this.props.messageSend(this.state)
    this.setState({ message: '' })
  }
  messageInput(e){
    this.setState({ message: e.target.value })
  }
  usernameInput(e){
    this.setState({username: e.target.value})
  }
  render() {
    return (
    <div className="cellPhoneContainer">
       <div className="messageBox">
        {this.props.messages.messages.map(message => (
          <p className="message">{message}</p>
          ))}
      </div>
      <form onSubmit={ this.messageSend.bind(this) }>
      <input type="text" value={this.state.username} onChange={this.usernameInput.bind(this)} />
      <textarea className="chatInput" placeholder="message your friends" value={ this.state.message } onChange={ this.messageInput.bind(this) }>
      </textarea>
      <button type="submit" className="sendButton">Send Message
      </button>
      </form>
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
    messageSend: (message) => {
      dispatch(messageSend(message))
    }
  }
}

CellPhoneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(CellPhoneContainer)

export default CellPhoneContainer;

