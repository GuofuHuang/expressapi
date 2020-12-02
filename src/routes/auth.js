import mongoose from "mongoose";
const router = require('express').Router();
import User from '../models/user';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';


const ObjectId = mongoose.Types.ObjectId;
const Config = dotenv.config();
// saltRounds must be a number
const saltRounds = Config.parsed.SALTROUNDS;


router.get('/', function(req, res) {
  console.log('loginneed password');

  res.send('login Page');
});
router.post('/login', async (req, res) => {
  console.log('landin');
  try {
    const query = {
      username: req.body.username,
    }
    const findUser = await User.find(query);
    if (findUser.length === 1) {
      // everything is OK
      const isPasswordCorrect = await bcrypt.compare(req.body.password, findUser[0].passwordHash);

      if (isPasswordCorrect) {
        let result = {
          status: 200,
          msg: 'Success',
          data: {
            username: req.body.username,
            avatar: 'http://127.0.0.1:3000/api/user/avatar',
            name: '诸葛大大'
          }
        };
        res.status(200).json(result);
      } else {
        console.log('nice', isPasswordCorrect);
        res.json({
          status: 401,
          msg: 'Incorrect username or password'
        });
      }
    } else {
      // The requested resource was not found
      res.status(404).json(findUser);
    }
  } catch(err) {
    const errData = {
      status: 404,
      msg: err,
    }
    res.status(400).json(errData);
  }});
router.get('/logout', function(req, res) {
  console.log('loginneed password');
  res.send('login Page');
});


router.post('/signup', async (req, res) => {
  console.log('signup', req.body);
  try {
    const newUser = new User({
      _id: ObjectId(),
      username: req.body.username,
      passwordHash: await bcrypt.hash(req.body.password, Number(saltRounds))
    });
    const result = await newUser.save();
    res.status(201).json(result);
  } catch(err) {
    res.status(400).json(err);
  }
});


module.exports = router;
