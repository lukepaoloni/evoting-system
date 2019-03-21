import { SET_FONT_SIZE } from "../constants/accessibility";
const initialState = {
  fontSize: 12
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FONT_SIZE:
      return {
        ...state,
        fontSize: action.payload.fontSize
      };
    default:
      return state;
  }
};
