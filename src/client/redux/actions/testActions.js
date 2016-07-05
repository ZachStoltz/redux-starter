import axios from 'axios';
export const testAction = () => {
  return dispatch => {
    dispatch(testActionRequest);

    return axios.get('/api/test')
      .then(rtn => { dispatch(testActionSuccess(rtn.data)); })
      .catch(err => { dispatch(testActionError(err)); });
  };
};
export const testActionRequest = ({
  type: 'TEST_ACTION_REQUEST'
});

export const testActionSuccess = (data) => ({
  type: 'TEST_ACTION_SUCCESS',
  payload: {data}
});

export const testActionError = (err) => ({
  type: 'TEST_ACTION_ERROR',
  payload: {err}
});
