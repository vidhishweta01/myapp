import ActionTypes from '../action/action_types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const workScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.WorkScheduleLoading:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.WorkScheduleSuccess:
      return {
        ...state,
        items: [...action.payload],
        loading: false,
      };
    case ActionTypes.WorkScheduleFailure:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default workScheduleReducer;
