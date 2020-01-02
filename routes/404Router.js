const { Router } = require('express');
const router = Router();

const path = require('path');

router.use('*', (req, res) => {
  res.status(404);
  if (req.method === 'GET' && req.accepts('html')) {
    console.log('HTML 404');
    try {
      return res.sendFile(path.join(__dirname, '../client/build/index.html'));
    } catch (err) {
      console.log(err);
    }
  }
  if (req.accepts('json')) {
    console.log('JSON 404');
    return res.send({
      status: 404,
      statusText: 'Not found',
    });
  }
  console.log('TXT 404');
  res.type('txt').send('Not found');
});

module.exports = router;
