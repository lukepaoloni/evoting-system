import { SET_FONT_SIZE } from "../constants/accessibility";

export const setFontSize = fontSize => ({
  type: SET_FONT_SIZE,
  payload: {
    fontSize
  }
});
