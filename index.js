'use strict';

// [START app]
const express = require('express');
const app = express();
app.get('/return', (req, res) => {
    console.log('return called')
    var code = req.query.code
    res.status(code).send('code='+code)
});
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]