import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getTodos = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/todos.json?orderBy="complete"&equalTo=false`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createTodo = (object) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/todos.json`, object)
    .then((response) => {
      axios
        .patch(`${baseURL}/todos/${response.data.name}.json`, {
          firebaseKey: response.data.name,
        })
        .then(() => getTodos().then(resolve));
    })
    .catch(reject);
});

const deleteTodo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/todos/${firebaseKey}.json`)
    .then(() => getTodos().then(resolve))
    .catch(reject);
});

const updateTodo = (todoObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/todos/${todoObj.firebaseKey}.json`, todoObj)
    .then(() => getTodos().then(resolve))
    .catch(reject);
});

export {
  getTodos, createTodo, deleteTodo, updateTodo,
};
