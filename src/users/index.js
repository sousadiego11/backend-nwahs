import { getNextUsersListUrl, getUsersUrl } from "../utils/functions.js"
import { github } from "../utils/github.js"

async function getUsersList(since) {
	if (since && typeof since !== Number) {
		throw new Error('Since must be a number!')
	}

	const url = getUsersUrl(since)
	const { data: users } = await github.get(url)
	const nextUrl = getNextUsersListUrl(users)
	
	return {
		users,
		nextUrl
	}
}

async function getUser(username) {
	const { data: user } = await github.get(`/users/${username}`)
	return user
}

export {
	getUsersList,
	getUser
}
