import React from 'react';
import PropTypes from 'prop-types';
import { deleteTodo, updateTodo } from '../api/data/todoData';

export default function Todo({ taco, setTodos, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodo(taco.firebaseKey).then(setTodos);
    } else {
      updateTodo({ ...taco, complete: true }).then(setTodos);
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-between alert alert-light"
        role="alert"
      >
        <button
          onClick={() => handleClick('complete')}
          className="btn btn-success"
          type="button"
        >
          Complete
        </button>
        {taco.name}
        <button
          onClick={() => setEditItem(taco)}
          className="btn btn-info"
          type="button"
        >
          Edit
        </button>
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
}

Todo.propTypes = {
  taco: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
