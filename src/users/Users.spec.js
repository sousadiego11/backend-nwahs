import { github } from "../utils/github.js"
import { Users } from "./Users.js"

const apiStub = {
	get() {
		return {
			data: [{ users: [{ id: 1 }] }]
		}
	}
}

const getSut = () => {
	const sut = new Users(apiStub)

	return {
		sut
	}
}

describe('Get users list', () => {
	test('Should throw if since query value is not a number', async () => {
		const { sut } = getSut()

		await expect(sut.getUsersList('a')).rejects.toThrow()
	})
	test('Should return object containg users and nextUrl', async () => {
		const { sut } = getSut()
		const response = await sut.getUsersList()

		console.log(Object.keys(response))

		expect(Object.keys(response).sort()).toEqual(['nextUrl', 'users'])
	})
})

describe('Get user', () => {
	const users = new Users(github)

	test('Should not throw if try to get valid user', async () => {
		await expect(users.getUser('sousadiego11')).resolves
	})
	test('Should throw if try to get invalid user', async () => {
		await expect(users.getUser(Math.random() * 6)).rejects.toThrow()
	})
})

describe('Get user repos', () => {
	const users = new Users(github)

	test('Should not throw if try to get valid user', async () => {
		await expect(users.getUserRepos('sousadiego11')).resolves
	})
	test('Should throw if try to get invalid user', async () => {
		await expect(users.getUserRepos(Math.random() * 6)).rejects.toThrow()
	})
})
