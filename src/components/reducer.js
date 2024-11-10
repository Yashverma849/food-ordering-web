// reducer.js

export const initialState = {
    user: null,
    // You can add more global state properties here if needed
  };
  
  export const actionTypes = {
    SET_USER: 'SET_USER',
    LOGOUT: 'LOGOUT',
    // Add other actions here
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          ...state,
          user: action.user,
        };
  
      case actionTypes.LOGOUT:
        return {
          ...state,
          user: null,
        };
  
      // Add more case actions to manage other parts of the global state
  
      default:
        return state;
    }
  };
  
  export default reducer;
  