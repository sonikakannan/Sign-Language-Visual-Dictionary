import Word from '../models/wordData.model.js';  

// GET /words - List all words
export const listAllWords = async (req, res) => {
  try {
    const words = await Word.find();
    res.status(200).json(words);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving words', error });
  }
};

// GET /words/:query - Fetch a word by name
export const filterByWord = async (req, res) => {
  try {
    const query = req.params.query.toLowerCase();
    const word = await Word.findOne({ word: query });
    if (!word) return res.status(404).json({ message: 'Word not found' });
    res.status(200).json(word);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving word', error });
  }
};

// POST /words - Add a new word
export const addWord = async (req, res) => {
  try {
    const { word, definition, imageUrl, videoUrl } = req.body;

    if (!word) return res.status(400).json({ message: 'Word is required' });

    const existing = await Word.findOne({ word: word.toLowerCase() });
    if (existing) return res.status(409).json({ message: 'Word already exists' });

    const newWord = new Word({ word: word.toLowerCase(), definition, imageUrl, videoUrl });
    await newWord.save();
    res.status(201).json(newWord);
  } catch (error) {
    res.status(500).json({ message: 'Error adding word', error });
  }
};

// POST /word/edit/:id - Edit a word
export const editWord = async (req, res) => {
  try {
    const { id } = req.params;
    const { word, definition, imageUrl, videoUrl } = req.body;

    const updatedWord = await Word.findByIdAndUpdate(
      id,
      { word: word?.toLowerCase(), definition, imageUrl, videoUrl },
      { new: true }
    );

    if (!updatedWord) return res.status(404).json({ message: 'Word not found' });

    res.status(200).json(updatedWord);
  } catch (error) {
    res.status(500).json({ message: 'Error editing word', error });
  }
};

// POST /word/delete/:id - Delete a word
export const deleteWord = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Word.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Word not found' });

    res.status(200).json({ message: 'Word deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting word', error });
  }
};
