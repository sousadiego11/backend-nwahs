import { getNextUsersListUrl, getUsersUrl } from "../utils/functions.js"

export class Users {
	api = null

	constructor(api) {
		this.api = api
	}

	async getUsersList(since) {
		if (since && isNaN(since)) {
			throw new Error('Since must be a number!')
		}
	
		const url = getUsersUrl(since)
		const { data: users } = await this.api.get(url)
		const nextUrl = getNextUsersListUrl(users)
		
		return {
			users,
			nextUrl
		}
	}
	
	async getUser(username) {
		const { data: user } = await this.api.get(`/users/${username}`)
		return user
	}
	
	async getUserRepos(username) {
		const { data: repos } = await this.api.get(`/users/${username}/repos`)
		return repos
	}
}
