/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import movieRouter from './routes/movieRoutes.js';
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use('/movies', movieRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
