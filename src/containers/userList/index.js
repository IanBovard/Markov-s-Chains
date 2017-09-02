import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendInvite, acceptInvite, declineInvite, broadcastUsers } from '../../actions';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: ''
    }

    this.selectUser = this.selectUser.bind(this);
    this.sendInvite = this.sendInvite.bind(this);
    this.onClickAccept = this.onClickAccept.bind(this);
    this.onClickDecline = this.onClickDecline.bind(this);
  }

  selectUser(username){
    return () => { // onClick handler
      this.setState({
        player : username
      });
    }
  }

  sendInvite(){
    this.props.sendInvite( this.state.player );
  }

  onClickAccept(){
    this.props.acceptInvite( this.props.invitesFrom );
  }

  onClickDecline(){
    this.props.declineInvite( this.props.invitesFrom );
  }

  componentWillMount() {
    this.props.broadcastUsers();
  }

  render() {
    if(this.props.goToRoom){
      this.props.history.push('/room');
    }
    console.log('props', this.props)
    return (
      <div className='userListMainContainer'>
      <div className='userListBorder'>
      <h1 className='userListTitle'> MIRKOV </h1>
      <div className="userListContainer">
      <div className='userListMariel'>
      </div>
      <div className='userListIan'>
      </div>
      <div className='userListReyn'>
      </div>
      {this.props.username.filter(userData => {
        return userData.username === localStorage.getItem("username")}).map(username => {
          return <span className='currentUser'>Welcome<br/> <p>{username.username}</p></span> })}
        {
          ( this.props.invitesFrom === null) ?
          <div className="userList">Friends:
          {this.props.username.filter(userData => {
            return userData.username !== localStorage.getItem("username")}).map(username => {
              return <p className='listOfUsers' onClick={this.selectUser(username)}>{username.username}</p> })}
            </div>
            : null
          }
          {
            ( this.props.invitesFrom === null) ?
            <button className='inviteUser btn' onClick={this.sendInvite} type="button">Invite</button>
            : null
          }

          {
            ( this.props.invitesFrom !== null) ?
            <div className='inviteForm'>
            <p className='inviteText'>
            Play with { this.props.invitesFrom } ?
            </p>
            <button className='acceptUser btn' onClick={this.onClickAccept} type="button">Accept</button>
            <button className='declineUser btn' onClick={this.onClickDecline} type="button">Decline</button>
            </div>
            : null
          }
          </div>
          </div>
          </div>
          )
  }
}

const mapStateToProps = (state) => {
  console.log('userList', state)
  return {
    username: state.userData,
    invitesFrom : state.invitesFrom,
    goToRoom : state.goToRoom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    broadcastUsers: (player) =>{

    },
    sendInvite: (player) => {
      dispatch(sendInvite(player))
    },
    acceptInvite: invitesFrom => {
      dispatch(acceptInvite(invitesFrom))
    },
    declineInvite: invitesFrom => {
      dispatch(declineInvite(invitesFrom))
    }
  }
}


UserList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(UserList)

  export default UserList;