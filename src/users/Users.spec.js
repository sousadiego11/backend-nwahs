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
