/* eslint-disable camelcase */
import React from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

const Spa = ({ spa }) => {
  const history = useHistory();
  const {
    id,
    owner_id,
    companyName,
    available_chairs,
    address,
  } = spa;
  console.log(id); // eslint-disable-line
  console.log(available_chairs); // eslint-disable-line
  return (
    <div>
      <h4>{companyName}</h4>
      <p>
        chair available:
        {available_chairs}
      </p>
      <p>{address}</p>
      <button type="button" onClick={() => history.push(`/spa/${id}/owner/${owner_id}/services`)}>View</button>
    </div>
  );
};

Spa.propTypes = {
  spa: propTypes.shape({
    id: propTypes.number.isRequired,
    owner_id: propTypes.number.isRequired,
    companyName: propTypes.string.isRequired,
    available_chairs: propTypes.number.isRequired,
    address: propTypes.string.isRequired,
  }).isRequired,
};

export default Spa;
