import express from 'express'
import { getAllQuestions, getQuestionDistribution } from '../../../controllers/api/v1/questions.js'

const router = express.Router()

/* api/v1/questions */
router.get('/', getAllQuestions)
/* api/v1/questions/generate */
router.post('/generate', getQuestionDistribution)

export default router
