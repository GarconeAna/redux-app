const initialState = {
  count: 0,

};

// eslint-disable-next-line
export const countReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT': 
      return {
        ...state,
        count: state.count - 1,
      }
    case 'MULTIPLY':
      return {
        ...state,
        count: state.count * action.payload,
      }
      case 'DIVIDE':
      return {
        ...state,
        count: action.payload / state.count,
      }
    default: 
      return state;
  }
};

//teste