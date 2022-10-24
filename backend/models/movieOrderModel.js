import mongoose from 'mongoose';

const movieOrderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'movieModel',
  },
});

const movieOrderModel = mongoose.model('Movie Order', movieOrderSchema);
export default movieOrderModel;
