import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillMount() {
  }

  render() {
    console.log(this.props)
    return (
    <div className="userlistContainer">

    {this.props.username.map(userData => {
      return <span>{userData.username}</span> })}

    <h2> Current Users </h2>
       <div className="userlist">

          <p className="users"></p>
        </div>
    </div>
      )
  }
}

const mapStateToProps = (state) => {
  console.log('testselect', state.userData)
  return {
    username: state.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
  }


UserList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(UserList)

export default UserList;
