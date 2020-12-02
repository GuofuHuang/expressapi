// 工艺 或者 操作
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Operation = new Schema({
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
});

export default mongoose.model('Operation', Operation);
