import ActionTypes from '../action/action_types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const GetServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ServiceLoading:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.ServicesSucess:
      return {
        ...state,
        items: [...action.payload],
        loading: false,
      };
    case ActionTypes.ServicesFailure:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default GetServiceReducer;
