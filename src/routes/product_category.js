var router = require('express').Router();
import {ObjectId} from '../utils';
import Product_Category from '../models/product_category';

router.post('/load_categories', async (req, res) => {
  const body = req.body;
  console.log('load', body);
  try {
    const query = {
      level: body.level,
      parentCategoryId: body.parentCategoryId
    };
    const result = await Product_Category.find(query, {name: 1, level: 1});
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

router.post('/update', async (req, res) => {
  let query = {_id: req.body._id};
  let update = req.body.update;
  try {
    await Product_Category.updateOne(query, update);
    res.json({
      status: 200,
      msg: 'Success'
    });

  } catch (e) {
    res.json({
      status: 400,
      msg: 'Failed'
    });

  }

})

router.post('/add', async (req, res, next) => {
  if (!!req.body.name) {
    const new_product_category = new Product_Category({
      _id: ObjectId(),
      name: req.body.name,
      level: req.body.level,
      parentCategoryId: req.body.parentCategoryId
    });
    try {
      const result = await new_product_category.save();
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
