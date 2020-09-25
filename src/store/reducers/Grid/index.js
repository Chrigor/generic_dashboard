import produce from "immer";
import actions from "./types";

const INITIAL_STATE = {
  data: [],
};

export default function Grid(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.ADD_DATA: // refatorar
      return produce(state, (draft) => {
        draft.data = action.payload;
      });
      
    default:
      return state;
  }
}
