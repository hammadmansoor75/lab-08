import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const movieModel = mongoose.model('Movie', movieSchema);
export default movieModel;
