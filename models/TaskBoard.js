const mongoose = require('mongoose');

const taskBoardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  userId: {
    type: String,
    trim: true
  },
  box: {
    type: Number,
    required: true,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const TaskBoard = mongoose.model('TaskBoard', taskBoardSchema);

module.exports = TaskBoard;
