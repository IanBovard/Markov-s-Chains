import React from 'react'
import { connect } from 'react-redux'
import { getText } from '../containers/App/actions'
import Text from './Text'

class GetText extends React.Component {

  componentDidMount(){
    this.props.submitText({ ...this.state});
  }

  render() {
    return (
      <div>
        {this.props.texts.map(text => (
          <Text key={text.id} {...text} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    texts: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
submitText: (text) => {
      dispatch(getText(text));
    }
  }
}

GetText = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetText)

export default GetText

