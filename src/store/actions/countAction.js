export const increment = (state) => async (dispatch) => {
  try {
    dispatch({
      type: 'INCREMENT',
      payload: state,
    });
  } catch (err) {
    console.log(err);
  }
};

export const decrement = (state) => async (dispatch) => {
  try {
    dispatch({
      type: 'DECREMENT',
      payload: state,
    });
  } catch (err) {
    console.log(err);
  }
};

export const multiply = (arg) => async (dispatch) => {
  try {
    dispatch({
      type: 'MULTIPLY',
      payload: arg,
    })
  } catch (err) {
    console.log(err);
  }
}

export const divide = (arg) => async (dispatch) => {
  try {
    dispatch({
      type: 'DIVIDE',
      payload: arg,
    })
  } catch (err) {
    console.log(err);
  }
}