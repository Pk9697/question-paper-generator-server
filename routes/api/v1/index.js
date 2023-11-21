import express from 'express'
import questionRoutes from './questions.js'

const router = express.Router()

router.get('/', (req, res) => res.send('v1'))
router.use('/questions', questionRoutes)

export default router
