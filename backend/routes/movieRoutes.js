import express from 'express';
import {
  getMovie,
  getMovies,
  addMovie,
  deleteMovie,
  updateMovie,
} from '../controllers/movieController.js';
const movieRouter = express.Router();

movieRouter.get('/', getMovies);
movieRouter.post('/', addMovie);
movieRouter.get('/:id', getMovie);
movieRouter.delete('/:id', deleteMovie);
movieRouter.patch('/:id', updateMovie);

export default movieRouter;
