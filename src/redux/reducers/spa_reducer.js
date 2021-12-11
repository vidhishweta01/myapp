import ActionTypes from '../action/action_types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const GetSpaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SpaLoading:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SpaSuccess:
      return {
        ...state,
        items: [...action.payload],
        loading: false,
      };
    case ActionTypes.SpaFailure:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default GetSpaReducer;
