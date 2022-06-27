
const getUsersUrl = (since) => since ?  `/users?since=${since}&per_page=11` : '/users?per_page=11'

const getNextUsersListUrl = (data = []) => {
	const lastUser = data[data.length - 1]
	const url = getUsersUrl(lastUser.id)
	return url
}

export {
	getUsersUrl,
	getNextUsersListUrl
}
