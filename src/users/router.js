import express from 'express'
import { getUsersList } from './index.js'

export const userRouter = express.Router()

userRouter.get('/users', async (req, res) => {
	const response = await getUsersList(req.query.since)
	res.send(response)
})
