const { Router } = require('express');
const router = Router();

router.post('/', async (req, res) => {
  const db = req.app.get('db');
  try {
    const { username, password, name, email, phone, bio, image } = req.body;
    if (typeof email === 'string') email = { address: email };
    const newUser = new db.User({
      username,
      password,
      name,
      email,
      phone,
      bio,
      image,
    });
    const result = await newUser.save();
    console.log(result);

    res.status(201).json({
      status: 201,
      statusText: 'Created',
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 400,
      statusText: 'Bad Request',
    });
  }
});

module.exports = router;
