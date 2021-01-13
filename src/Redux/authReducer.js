let initialState = {
  isLoggedIn: false
};

export function authReducer(state = initialState, action) {
  //console.log("Authreducer", action);
  let stateCopy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: action.payload
      };
    default:
      return state;
  }
}
