import axios from 'axios';
import ActionTypes from './action_types';

export const FetchSpa = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.SpaLoading,
  });
  try {
    const response = await axios.get('https://registeration-app.herokuapp.com/api/v1/spa_n_salons',
      {
        headers: {
          'Content-Type': 'application/json',
          token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.eU5RmofDjsTBkmYFZmccyBoKtLS6Rqebe1wnHDtyzto',
        },
      });
    dispatch({
      type: ActionTypes.SpaSuccess,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.SpaFailure,
      error,
    });
  }
};

export const FetchServices = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.ServicesLoading,
  });
  try {
    const response = await axios.get('https://registeration-app.herokuapp.com/api/v1/services',
      {
        headers: {
          'Content-Type': 'application/json',
          token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.eU5RmofDjsTBkmYFZmccyBoKtLS6Rqebe1wnHDtyzto',
        },
      });
    dispatch({
      type: ActionTypes.ServicesSucess,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ServicesFailure,
      error,
    });
  }
};

export const FetchWorkSchedule = (id) => async (dispatch) => {
  dispatch({
    type: ActionTypes.WorkScheduleLoading,
  });
  try {
    const response = await axios.get(`https://registeration-app.herokuapp.com/api/v1/services/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.eU5RmofDjsTBkmYFZmccyBoKtLS6Rqebe1wnHDtyzto',
        },
      });
    dispatch({
      type: ActionTypes.WorkScheduleSucess,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.WorkScheduleFailure,
      error,
    });
  }
};
