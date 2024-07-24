const express = require('express')
const serveStatic = require('serve-static')

const app = express()

app.use(serveStatic('public', { index: ['index.html', 'index.htm'] }))
app.listen(3000)