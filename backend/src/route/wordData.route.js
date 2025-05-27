import express from 'express'
import { addWord, deleteWord, editWord, filterByWord, listAllWords } from '../controller/wordData.controller.js'

const router =express.Router()

router.get('/words', listAllWords)
router.get('/words/:query', filterByWord)
router.post('/words', addWord)
router.post('/word/delete/:id', deleteWord)

export default router
