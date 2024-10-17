const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user.route')
const authRouter = require('./routes/auth.route')
const listingRouter = require('./routes/listing.route')

require('dotenv').config();

mongoose
  .connect('mongodb+srv://saadakmal460:12345@task-manager.3fgcnhr.mongodb.net/real-estate-2?retryWrites=true&w=majority&appName=Task-Manager')
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(cors())
app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
