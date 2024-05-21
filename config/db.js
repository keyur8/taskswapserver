const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://keyurp54:vZIP7Hs0D9j9FkP3@cluster0.o1hse5m.mongodb.net/';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
