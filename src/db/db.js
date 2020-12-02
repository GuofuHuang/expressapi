import mongoose from 'mongoose';
import dotenv from 'dotenv';
const Config = dotenv.config().parsed;

const uri = 'mongodb+srv://' +
  Config.DATABASE_USER +
  ':' +
  Config.DATABASE_PASSWORD +
  '@cluster0.pxjih.azure.mongodb.net/' +
  Config.DATABASE +
  '?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
} );

