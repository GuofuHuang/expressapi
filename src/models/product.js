import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type:String,
    required: true
  },
  categoryId: {
    type: String,
    required: true,
  },
  image: String,
  operations: [{
    userId: String,
    operationId: String
  }]
});

export default mongoose.model('Product', ProductSchema);
