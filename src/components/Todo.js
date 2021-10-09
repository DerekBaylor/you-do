import React from 'react';
import Proptypes from 'prop-types';
import { Alert } from 'bootstrap';

export default function Todo({ taco }) {
  return (
    <div>
      <Alert color="light">
        <button className="btn btn-success" type="button">
          Complete
        </button>
        {taco.name}
        <button className="btn btn-danger" type="button">
          Delete
        </button>
      </Alert>
    </div>
  );
}

Todo.propTypes = {
  taco: Proptypes.shape({
    name: Proptypes.string,
    complete: Proptypes.bool,
    date: Proptypes.string,
    uid: Proptypes.string,
  }).isRequired,
};
