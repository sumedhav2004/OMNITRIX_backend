const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const repoRoutes = require('./routes/repo');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/repo', repoRoutes);

module.exports = app;
