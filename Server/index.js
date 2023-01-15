const express = require('express');
const connectToMongo =require('./db')
const cors = require('cors');
const port = 5000   
const app = express();

connectToMongo();

//use of cors dependencies will help to jump to the next specific function 
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./Routers/auth'))
app.use('/api/stock',require('./Routers/stock'))
app.get('/', (req, res) => { 
    res.send('Hello World! of dead stock')
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })