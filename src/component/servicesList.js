import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { FetchServices } from '../redux/action/Actions';
import Services from './Service';

const ServiceList = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const state = useSelector((state) => state);
  const { GetServiceReducer } = state;

  useEffect(() => {
    dispatch(FetchServices());
  }, []);

  const renderServiceList = () => {
    if (state.loading) {
      return <h1>loading...</h1>;
    }

    if (GetServiceReducer.items) {
      const Service = GetServiceReducer.items;
      console.log(Service); // eslint-disable-line
      return (Service.map((service) => <Services key={service.id} service={service} />));
    }
    return <h1>cannot get list try again</h1>;
  };
  return (
    <div>
      {renderServiceList()}
    </div>
  );
};

export default ServiceList;
