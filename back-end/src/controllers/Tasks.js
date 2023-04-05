const { Task } = require('../models');

const getAllTasks = async (_req, res) => Task
  .findAll()
  .then((tasks) => res.status(200).json(tasks))
  .catch((error) => {
    console.error(error);
    res.status(500).end()
  });

const addTask = async (req, res) => {
  try {
    const existingTask = await Task.findOne({ where: { description: req.body.description } });
    if (existingTask) {
      return res.status(409).json({ message: 'Task with the same description already exists' });
    }
    const newTask = await Task.create({ description: req.body.description, check: false });
    return res.status(200).json(newTask);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
};


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
