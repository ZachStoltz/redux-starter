import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../redux/actions/testActions';

class Main extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.dispatch(testAction());
  }
  render() {
    return (
      <div>
        <h1>
          Hello From Main Component :)
        </h1>
        <h2>
          Hello again!
        </h2>
      </div>
    );
  }
}

export default connect(state => ({
  test: state.testReducer
}))(Main);
