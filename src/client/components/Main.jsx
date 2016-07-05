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
  shouldComponentUpdate(nextProps) {
    const { test } = this.props;
    console.log(test.data !== nextProps.test.data);
    if(test.data !== nextProps.test.data || nextProps.test.isFetching) {
      return true;
    }

    return false;
  }
  
  render() {
    const { test } = this.props;
    return (
      <div>
        <h1>
          Hello From Main Component :)
        </h1>
        <h2>
          {test.isFetching ? 'Loading.....' : test.data}
        </h2>
      </div>
    );
  }
}

export default connect(state => ({
  test: state.testReducer
}))(Main);
