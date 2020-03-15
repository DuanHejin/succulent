import { SucculentAction } from '../constants/actionTypes';

const initState = {
  succulentCluster: {},
  succulents: [],
  succulent: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case SucculentAction.GET_SUCCULENTS:
      return {
        ...state,
        succulents: action.payload.succulents,
        succulentCluster: action.payload.succulentCluster
      }
    case SucculentAction.GET_SUCCULENT_BY_ID:
      return {
        ...state,
        succulent: state.succulents.find(succu => succu.id === action.payload)
      }
    case SucculentAction.CLOSE_OVERLAY:
      return {
        ...state,
        succulent: null
      }
    default:
      return state;
  }
};
