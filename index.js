var express = require('express');

var app = express();
var main = require('./main');


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);

});
