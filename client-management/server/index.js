// Path: server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/users');

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
