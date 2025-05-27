import mongoose from 'mongoose';
import Word from '../models/wordData.model.js';
import dotenv from 'dotenv';
import wordsData from '../utils/wordsData.js'; 

dotenv.config();

const seedWords = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    await Word.deleteMany();
    await Word.insertMany(wordsData.map(word => ({ ...word, word: word.word.toLowerCase() })));
    console.log('Words seeded successfully');
    process.exit();
  } catch (err) {
    console.error('Error seeding words:', err);
    process.exit(1);
  }
};

seedWords();
