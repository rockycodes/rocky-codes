const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = 1738

//what am i missing here?
//i don't need body parser, because there is no posting
//i'm serving up my static files and sending my index.html with every request
//i have error handling middleware
//i'm listening on the port

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
)

