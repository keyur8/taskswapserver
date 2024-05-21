const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const authRoutes = require("./routes/auth.js")
const cors = require('cors');
var path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use("/Uploads", express.static(path.join(__dirname, 'Uploads')));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

const taskBoardRouter = require('./routes/taskBoard');
app.use('/api', taskBoardRouter);

app.options('*', cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
