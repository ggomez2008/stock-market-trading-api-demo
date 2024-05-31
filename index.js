require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.SERVER_PORT || 3000
const { stockRouter } = require('./routers/stocks/')
const { tradingRouter } = require('./routers/trading/')
const { portfolioRouter } = require('./routers/portfolio/')

app.use(express.json())
app.use('/api', stockRouter(), tradingRouter(), portfolioRouter())
app.get('/health-check', (req, res) => {
    res.sendStatus(200)
})
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})
