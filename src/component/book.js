import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchWorkSchedule } from '../redux/action/Actions';

const book = () => {
  const res = useParams();
  const k = res.id;
  const dispatch = useDispatch();
  console.log(res); // eslint-disable-line
  const state = useSelector((state) => state);
  const { WorkScheduleReducer } = state;
  useEffect(() => {
    dispatch(FetchWorkSchedule(k));
  }, []);

  const RenderBook = () => {
    if (state.loading) {
      return <h1>loading.....</h1>;
    }

    if (WorkScheduleReducer) {
      // const schedule = WorkScheduleReducer.items;
      return (<p>success</p>);
    }

    return <h1>cannot get list try again</h1>;
  };

  return (
    <div>
      {RenderBook()}
    </div>
  );
};

export default book;
