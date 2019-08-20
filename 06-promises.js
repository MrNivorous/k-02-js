let brushTeeth = () => {
	return new Promise((resolve, reject) => {
		return setTimeout (() => {resolve('ready')
	}, 1000)
	})
}

// brushTeeth().then(res => console.log(res))

let getUp = () => {
	return new Promise((resolve, reject) => {
		return setTimeout (() => {resolve('awake')
	}, 1000)
	})
}

// getUp().then(res => console.log(res))

let haveBreakfast = () => {
	return new Promise((resolve, reject) => {
		return setTimeout (() => {resolve('eaten')}, 2000)
	})
}

// haveBreakfast().then(res => console.log(res))

let haveShower = () => {
	return new Promise((resolve, reject) => {
		return setTimeout(() => {resolve('showered')}, 2000)
	})
}

// haveShower().then(res => console.log(res))

getUp().then(res => {
	console.log(res)
	haveShower().then(res => {
		console.log(res)
		haveBreakfast().then(res => {
			console.log(res)
			brushTeeth().then(res => console.log(res))
		})
	})
})
