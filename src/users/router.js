import express from 'express'
import { getUser, getUsersList } from './index.js'

export const userRouter = express.Router()

userRouter.get('/users', async (req, res) => {
	try {
		const response = await getUsersList(req.query.since)
		res.send(response)
	} catch (error) {
        res.status(400)
		res.send(error.message)
	}
})

userRouter.get('/users/:username/details', async (req, res) => {
	const response = await getUser(req.params.username)
	res.send(response)
})