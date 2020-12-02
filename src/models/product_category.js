import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Product_CategorySchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type:String,
    required: true,
    unique: true,
  },
  level: {
    type: Number,
    required: true
  },
  parentCategoryId: {
    type: String
  }
});

export default mongoose.model('Product_Category', Product_CategorySchema);
