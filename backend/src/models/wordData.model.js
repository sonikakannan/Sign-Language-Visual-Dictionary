import mongoose from "mongoose";

const wordSchema = new mongoose.Schema({
  word: { type: String, required: true},
  definition: String,
  imageUrl: String,
  videoUrl: String
});

const  Word= mongoose.model('Word', wordSchema);

export default Word
