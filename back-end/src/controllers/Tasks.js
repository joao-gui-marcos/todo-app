const { Task } = require('../models');

const getAllTasks = async (_req, res) => Task
  .findAll()
  .then((tasks) => res.status(200).json(tasks))
  .catch((error) => {
    console.error(error);
    res.status(500).end()
  });

const addTask = (req, res) => Task
  .create({ description: req.body.description, check: false })
  .then((addedTask) => res.status(200).json(addedTask))
  .catch((error) => {
    console.error(error);
    res.status(500).end()
  });

const rmTask = (req, res) => Task
  .destroy({ where: { id: req.params.id } })
  .then(() => res.status(204).end())
  .catch((error) => {
    console.error(error);
    res.status(500).end()
  });

const putTask = ({ params, body }, res) => {
  console.log(body);
  console.log(body.description, body.check);
  return Task
    .update({ description: body.description, check: body.check }, { where: { id: params.id } })
    .then(() => res.status(204).end())
    .catch((error) => {
      console.error(error);
      res.status(500).end()
    });
};

module.exports = {
  getAllTasks,
  addTask,
  rmTask,
  putTask,
}
