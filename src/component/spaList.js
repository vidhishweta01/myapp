import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { FetchSpa } from '../redux/action/Actions';
import Spa from './spa';
// import ServiceList from './servicesList';

const SpaList = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const state = useSelector((state) => state);
  const { GetSpaReducer } = state;

  useEffect(() => {
    dispatch(FetchSpa());
  }, []);

  const renderSpaList = () => {
    if (state.loading) {
      return <h1>loading...</h1>;
    }

    if (GetSpaReducer.items.length > 0) {
      const spa = GetSpaReducer.items;
      console.log(spa); // eslint-disable-line
      return (spa.map((spa) => <Spa key={spa.id} spa={spa} />));
    }
    return <h1>cannot get list try again</h1>;
  };
  return (
    <div>
      {renderSpaList()}
    </div>
  );
};

export default SpaList;
