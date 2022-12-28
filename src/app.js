const express = require('express');
const app = express();

app.listen(process.env.PORT, ()=>{
    console.log('Started listening at port', process.env.PORT);
});

module.exports = app;