const express = require('express');
const setupRoutes = require('./router/indexRouter');

require('dotenv').config();


const app = express();

const port = process.env.PORT || 8000;
app.use(express.json());

setupRoutes(app);

app.listen(port, () => {
    console.log(`Server run on ${port}`);
});