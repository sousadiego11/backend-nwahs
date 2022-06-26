import express from 'express'
import { github } from '../utils/github.js'
import { Users } from './Users.js'

export const userRouter = express.Router()
const users = new Users(github)

userRouter.get('/users', async (req, res) => {
	try {
		const response = await users.getUsersList(req.query.since)
		res.send(response)
	} catch (error) {
        res.status(400)
		res.send(error.message)
	}
})

userRouter.get('/users/:username/details', async (req, res) => {
	
	try {
		const response = await users.getUser(req.params.username)
		res.send(response)
	} catch (error) {
		res.status(400)
		res.send(error.message)
	}
})

userRouter.get('/users/:username/repos', async (req, res) => {
	const response = await users.getUserRepos(req.params.username)
	res.send(response)
})
