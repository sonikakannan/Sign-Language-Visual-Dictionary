import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import wordRoute from './route/wordData.route.js'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173", 
    "https://sign-language-visual-dictionary-1.onrender.com"
  ],
  credentials: true,
}));

app.use('/', wordRoute)

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectDB();
});