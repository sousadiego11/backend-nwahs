import { Users } from "./Users.js"

const apiStub = {
	get: () => ({ status: 'OK' })
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
})
