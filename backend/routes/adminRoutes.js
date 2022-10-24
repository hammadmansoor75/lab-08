import express, { Router } from 'express';
const adminRouter = express.Router();
import movieModel from '../models/movieModel.js';
import movieOrderModel from '../models/movieOrderModel.js';

adminRouter.post('/add', async (req, res) => {
  const { title, year, rating, genre } = req.body;
  try {
    const movie = await movieModel.create({ title, year, rating, genre });
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ mssg: error.message });
  }
});
export default adminRouter;
