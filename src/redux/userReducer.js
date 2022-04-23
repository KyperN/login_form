const init = {
  users: [
    { userName: 'kyper', password: 'kyper' },
    { userName: 'test', password: 'test' },
  ],
};

export const userReducer = (state = init, action) => {
  switch (action.type) {
    case 'REGISTER':
      console.log(state.users);
      return { state, users: [...state.users, action.payload] };
    default:
      return { ...state };
  }
};
