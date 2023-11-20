import express from 'express'

const router = express.Router()

router.get('/v1', (req, res) => res.send('v1'))

export default router