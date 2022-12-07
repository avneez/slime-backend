
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res)=>{
  res.send('Hello to Slime App');
});

// PORT = 5000
// CONNECTION_URL = mongodb+srv://avneez:azkaban@cluster0.ekzfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const PORT = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.CONNECTION_URL);
} catch (error) {
  console.log('connnection error', error)
}
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
