const express = require('express');
const app = express()
const port = 5500;

app.listen(port, ()=> {
    console.log(`Bank app listening on port ${port}!`);
})