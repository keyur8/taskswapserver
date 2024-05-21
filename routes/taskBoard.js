const express = require('express');
const router = express.Router();
const taskBoardController = require('../controllers/taskBoardController');

//create task
router.post('/taskBoards', taskBoardController.createTaskBoard);

//get task
router.get('/taskBoards', taskBoardController.getTaskBoards);

//get task by id
router.get('/taskBoards/:id', taskBoardController.getTaskBoard);

//update task
router.put('/taskBoards/:id', taskBoardController.updateTaskBoard);

//delete task
router.delete('/taskBoards/:id', taskBoardController.deleteTaskBoard);

module.exports = router;