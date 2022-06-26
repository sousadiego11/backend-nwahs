import { getNextUsersListUrl, getUsersUrl } from "../utils/functions.js"
import { github } from "../utils/github.js"

async function getUsersList(since) {
	const url = getUsersUrl(since)
	const { data: users } = await github.get(url)
	const nextUrl = getNextUsersListUrl(users)
	
	return {
		users,
		nextUrl
	}
}

export {
	getUsersList
}
