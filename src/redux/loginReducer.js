const init = { loggedUser: {} };

export const loginReducer = (state = init, action) => {
  switch (action.type) {
    case 'LOGIN': {
      console.log(state.loggedUser);
      return { ...state, loggedUser: action.payload };
    }
    default:
      return { ...state };
  }
};
