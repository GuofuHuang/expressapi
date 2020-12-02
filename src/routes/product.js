import Product_Category from "../models/product_category";

var router = require('express').Router();
import {ObjectId} from '../utils';
import Product from '../models/product';

router.post('/load_products', async (req, res) => {
  const body = req.body;
  console.log('load', body);
  try {
    const query = {};
    const result = await Product.find(query);
    console.log('result', result);
    res.send({
      status: 200,
      msg: 'Success',
      data: result
    });
  } catch (err) {
    res.send(err.message);
  }
});


router.post('/add', async (req, res) => {
  if (!!req.body.name) {
    const new_product = new Product({
      _id: ObjectId(),
      name: req.body.name,
      categoryId: req.body.categoryId
    });
    try {
      const result = await new_product.save();
      res.json({
        status: 200,
        msg: 'Success',
        data: result
      });
    } catch(err) {
      res.json({
        status: 400,
        msg: err.message
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      msg: 'name is required'
    });
  }
});

module.exports = router;
