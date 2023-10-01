// EXERCISE 1 - CREATE A BASIC BACK END WITH MULTIPLE SERVERS RUNNING ON DIFFERENT PORTS:
// require the express package:
const express = require('express')
// Create the app using the express package
const app = express()
// create a second server:
const app2 = express()
// set the port to 3000
const port = 3000
// set the port for app2 to 3001
const port2 = 3001

// setting the route and add the handlers (req and res)
app.get('/', (req, res) => {
    res.send("Hello world!")
})

// set the route and handlers for the second server
app2.get('/', (req, res) => {
    res.send("This is server 2")
})

// activate the web server using the .listen method 
app.listen(port, () => {
    console.log(`The application is listening on http://localhost:${port}`)
})

// activate the second server using the .listen method
app2.listen(port2, () => {
    console.log(`Application 2 is listening on port ${port2}`)
})
