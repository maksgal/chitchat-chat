export function reducer(state, action) {
  switch (action.type) {
    case "user":
      return { ...state, user: action.payload };
    case "loading":
      return { ...state, loading: false };
    case "messages":
      return { ...state, messages: action.payload };
    default:
      return state;
  }
}
