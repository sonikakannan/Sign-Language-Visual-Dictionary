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
    ""
  ],
  credentials: true,
}));

app.use('/', wordRoute)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectDB();
});