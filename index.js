const express = require('express')
const bodyParser = require('body-parser')
const { init } = require('./db')
const routes = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use(routes)

init().then(() => {
  console.log('starting server on port 3000')
  app.listen(3000)
  process.on('uncaughtException', (e) => {
    console.log("********************************************************")
    console.log("********************************************************")

    // I have added this line just to test out building, and pushing a new version of docker image to dockerhub app:1.1 
    console.log("Useless Message")

    console.error(e); // try console.log if that doesn't work

    process.exit(10);

    

  });
})
