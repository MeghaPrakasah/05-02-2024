
const mongoose = require('mongoose')
const express =require('express')
const app = express()
const apiRouter = require('./Router/auth')


mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.use(express.json())
app.use('/api',apiRouter)


app.listen(3000, () => {
  console.log('Server is running');
});

