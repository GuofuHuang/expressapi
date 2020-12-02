import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import models from './models';
import './db/db';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/mock', require('./routes/mock'));
app.use('/product', require('./routes/product'));
app.use('/product_category', require('./routes/product_category'));
//
// app.get('/', (req, res) => {
//   return res.send('Received a GET HTTP method');
// });
//
// app.post('/', (req, res) => {
//   return res.send('Received a POST HTTP method');
// });
//
// app.put('/', (req, res) => {
//   return res.send('Received a PUT HTTP method');
// });
//
// app.delete('/', (req, res) => {
//   return res.send('Received a DELETE HTTP method');
// });
//
// app.get('/users', (req, res) => {
//   return res.send(Object.values(users));
// });
//
// app.get('/users/:userId', (req, res) => {
//   return res.send(users[req.params.userId]);
// });
//
// app.post('/users', (req, res) => {
//   return res.send('POST HTTP method on user resource');
// });
//
// app.put('/users/:userId', (req, res) => {
//   return res.send(
//     `PUT HTTP method on user/${req.params.userId} resource`,
//   );
// });
//
// app.delete('/users/:userId', (req, res) => {
//   return res.send(
//     `DELETE HTTP method on user/${req.params.userId} resource`,
//   );
// });
//
// app.get('/messages', (req, res) => {
//   return res.send(Object.values(messages));
// });
//
// app.get('/messages/:messageId', (req, res) => {
//   return res.send(messages[req.params.messageId]);
// });
//
// app.use((req, res, next) => {
//   req.me = users[1];
//   next();
// });
//
// app.post('/messages', (req, res) => {
//   const id = uuidv4();
//   const message = {
//     id,
//     text: req.body.text,
//     userId: req.me.id,
//   };
//
//   messages[id] = message;
//
//   return res.send(message);
// });
//
// app.delete('/messages/:messageId', (req, res) => {
//   const {
//     [req.params.messageId]: message,
//     ...otherMessages
//   } = models.messages;
//
//   models.messages = otherMessages;
//
//   return res.send(models.messages);
// });

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
