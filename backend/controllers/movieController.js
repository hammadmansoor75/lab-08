import movieModel from '../models/movieModel.js';

export const getMovies = async (req, res) => {
  await res.json('Get Movies');
};

export const getMovie = async (req, res) => {
  res.json('Get Movie');
};

export const addMovie = async (req, res) => {
  res.json('Add Movie');
};

export const deleteMovie = async (req, res) => {
  res.json('Delete Movie');
};

export const updateMovie = async (req, res) => {
  res.json('Update Movie');
};
