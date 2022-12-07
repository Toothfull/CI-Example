import chai from 'chai'
import chiahttp from 'chai-http'
import { expressApp, httpServer } from './main'

chai.use(chiahttp)

suite ('Test Express App', () => {

	test('Hello World', () => {

		chai.request(expressApp) // <--- This is the line that fails
			.get('/hello')
			.end((req, res) => {
				chai.assert.equal (res.status, 200, 'Expected status code is 200')
				chai.assert.equal(res.text, 'Hello World!', 'Response text is not "Hello World!"')
			})


	})

	suiteTeardown(() => {
		httpServer.close()
	})


})