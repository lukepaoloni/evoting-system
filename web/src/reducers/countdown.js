import * as constants from "../constants/countdown";
const initialState = {
  iatDate: null,
  seconds: 0,
  start_time: 0,
  decrement_interval: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.START_COUNTDOWN:
      return Object.assign({}, state, {
        start_time: action.start_time,
        seconds: action.start_time
      });
    case constants.END_COUNTDOWN:
      return Object.assign({}, state);
    case constants.TICK:
      return Object.assign({}, state, {
        seconds: (state.seconds - 0.01).toFixed(2)
      });
    case constants.SET_IAT_DATE:
      return {
        ...state,
        iatDate: action.payload.iatDate
      };
    default:
      return state;
  }
};
