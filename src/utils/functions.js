
const getUsersUrl = (since) => since ?  `/users?since=${since}` : '/users'

const getNextUsersListUrl = (data = []) => {
	const lastUser = data[data.length - 1]
	const url = getUsersUrl(lastUser.id)
	return url
}

export {
	getUsersUrl,
	getNextUsersListUrl
}
