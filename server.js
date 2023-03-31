const express = require('express');
const connectToDb = require('./DB/db.connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./server/routes');
// const logger = require('./logger');

const app = express();
const PORT = 4200
const server = require('http').createServer(app);
connectToDb();

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api',routes);
  
// app.use('/',(req, res, next)=>{res.send({message:"message"})})

server.listen(PORT,()=>{console.log(`server is running at port ${PORT}` )})

