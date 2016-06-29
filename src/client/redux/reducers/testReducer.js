export default (state = {}, action) => {
  switch(action.type){
    case 'TEST_ACTION':
      console.log('Success, Yes!');
      return state;
    default:
      return state;
  }
};
