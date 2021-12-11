/* eslint-disable camelcase */
import React from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import propTypes from 'prop-types';

const Services = ({ service }) => {
  const history = useHistory();
  const res = useParams();
  console.log(res); // eslint-disable-line
  const {
    id,
    name,
    cost,
    duration,
    spa_n_salon_id,
  } = service;
  return (
    <div>
      <h4>{name}</h4>
      <p>
        {cost}
      </p>
      <p>
        {duration * 60}
        {' '}
        minutes
      </p>
      <button type="button" onClick={() => history.push(`/services/${id}/spa_n_salon/${spa_n_salon_id}/owner/${res.owner_id}/book`)}>Book</button>
    </div>
  );
};

Services.propTypes = {
  service: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    cost: propTypes.number.isRequired,
    duration: propTypes.number.isRequired,
    spa_n_salon_id: propTypes.number.isRequired,
  }).isRequired,
};

export default Services;
