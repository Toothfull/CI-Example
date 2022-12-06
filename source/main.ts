import express from 'express'

export const expressApp = express()
const webServerPort = 9000


expressApp.get('/', (req, res) => {
	res.status(302)
	res.header('Location', '/hello')
	res.end()
})

expressApp.get('/hello', (req, res) => {
	res.status(200)
	res.header('Content-Type', 'text/plain')
	res.send('Hello World!')
})

export const httpServer = expressApp.listen(webServerPort, () => {
	console.log(`Example app listening at http://localhost:${webServerPort}`)
})