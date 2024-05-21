const TaskBoard = require('../models/TaskBoard');

exports.createTaskBoard = async (req, res) => {
  try {
    const { name, description, taskBox, userId } = req.body;
    const box = parseInt(taskBox, 10); 

    const taskBoard = new TaskBoard({
      name,
      description,
      box,
      userId
    });

    await taskBoard.save();
    res.status(201).send(taskBoard);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.getTaskBoards = async (req, res) => {
  try {
    const taskBoards = await TaskBoard.find();
    res.status(200).send(taskBoards);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTaskBoard = async (req, res) => {
  try {
    const taskBoard = await TaskBoard.findById(req.params.id);
    if (!taskBoard) {
      return res.status(404).send();
    }
    res.status(200).send(taskBoard);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTaskBoard = async (req, res) => {
  try {
    const taskBoard = await TaskBoard.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!taskBoard) {
      return res.status(404).send();
    }
    res.status(200).send(taskBoard);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteTaskBoard = async (req, res) => {
  try {
    const taskBoard = await TaskBoard.findByIdAndDelete(req.params.id);
    if (!taskBoard) {
      return res.status(404).send();
    }
    res.status(200).send(taskBoard);
  } catch (error) {
    res.status(500).send(error);
  }
};
