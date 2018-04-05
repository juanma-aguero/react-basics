import * as actionTypes from '../constants/simpleConstants'


const initialState = {
  dropdown_value: "",
  text_value: "",
};

function simpleReducer(state = initialState, action = '') {

  switch (action.type) {

    case actionTypes.DROPDOWN_CHANGE:
      return Object.assign({}, state, {
        dropdown_value: action.value
      });

    case actionTypes.TEXT_CHANGE:
      return Object.assign({}, state, {
        text_value: action.value
      });

    default:
      return state;
  }
}

export default simpleReducer