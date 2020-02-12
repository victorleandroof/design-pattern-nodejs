const todo = require('./estados/todo');
const inprogress = require('./estados/inprogress');
const done = require('./estados/done');

module.exports = () => {

  const init = () => todo;

  const transition = (current) => {
    if (current.getNome() === 'todo') return inprogress;
    return done;
  };

  return { init, transition };

};