import express from 'express'
import { getMovies, addMovie } from '../controllers/movies.js'

const router = express.Router()

router.get('/', getMovies)
router.post('/', addMovie)

export default router
