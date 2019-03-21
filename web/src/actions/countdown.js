import {
  START_COUNTDOWN,
  END_COUNTDOWN,
  SET_IAT_DATE
} from "../constants/countdown";
export const setIatDate = iatDate => ({
  type: SET_IAT_DATE,
  payload: {
    iatDate
  }
});

export const startCountdown = () => ({
  type: START_COUNTDOWN
});

export const endCountdown = () => ({
  type: END_COUNTDOWN
});
