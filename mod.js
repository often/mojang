export async function status() {
	const data = await fetch('https://status.mojang.com/check')

	return data.json()
}

export async function uuid(username, timestamp) {
	if (!username) throw 'missing username'

	timestamp = timestamp || Date.now()

	const data = await fetch('https://api.mojang.com/users/profiles/minecraft/' + username + '?at=' + timestamp)

	if (data.status === 204) throw 'invalid username'

	return data.json()
}

export async function history(username) {
	const user = await uuid(username)

	const data = await fetch('https://api.mojang.com/user/profiles/' + user.id + '/names')

	return data.json()
}

export async function names(list) {
	if (!list) throw 'missing list'

	if (!Array.isArray(list)) throw 'list is not a valid array'

	const data = await fetch('https://api.mojang.com/profiles/minecraft', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(list)
	})

	return data.json()
}

export async function textures(username) {
	const user = await uuid(username)

	const data = await fetch('https://sessionserver.mojang.com/session/minecraft/profile/' + user.id)

	const res = await data.json()

	const textures = atob(res.properties[0].value)

	return JSON.parse(textures)
}

export async function blocked() {
	const data = await fetch('https://sessionserver.mojang.com/blockedservers')

	return data.text()
}

export async function statistics(options) {
	if (!options) throw 'missing options'

	if (!Array.isArray(options)) throw 'options is not a valid array'

	const opts = []

	options.forEach(option => opts.push(option))

	const data = await fetch('https://api.mojang.com/orders/statistics', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({metricKeys: opts})
	})

	return data.json()
}
