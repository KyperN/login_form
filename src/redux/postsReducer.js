const init = { posts: [] };

export const postsReducer = (state = init, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return { state, posts: [...state.posts, action.payload] };
    default:
      return { ...state };
  }
};
