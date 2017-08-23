import React from 'react'
import { connect } from 'react-redux'
import { addText } from './App/actions'

class AddText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  textInput(e) {
    this.setState({ text: e.target.value });
    console.log('e', e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitText({ ...this.state});
    this.setState({
      text: ''
    });

  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)} >
      <div>
      <input id="textInput" placeholder= "message"value={this.state.text} onChange={this.textInput.bind(this)} />

      <button type="submit">Submit</button>
      </div>
      </form>
      </div>
      );
  }
}


const mapStateToProps = (state) => {
  console.log('here', state)
  return {
    texts: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitText: (text) => {
      dispatch(addText(text));
    }
  }
}

AddText = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AddText);

  export default AddText;