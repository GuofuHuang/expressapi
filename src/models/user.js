import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  username: {
    type:String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  }
});



export default mongoose.model('User', userSchema);
