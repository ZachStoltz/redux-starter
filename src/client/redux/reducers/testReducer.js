const initialState = {
  isFetching: false
};
export default (state = initialState, {payload={}, type, ...action}) => {
  const { data, err } = payload;
  switch(type){
    case 'TEST_ACTION_REQUEST':
      return {
        ...state,
        isFetching: true
      };
    case 'TEST_ACTION_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data
      };
    case 'TEST_ACTION_ERROR':
      return {
        ...state,
        isFetching: false,
        err
      };
    default:
      return state;
  }
};
