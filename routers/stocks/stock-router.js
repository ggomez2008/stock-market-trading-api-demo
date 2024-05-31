const express = require('express')
const {
    getGlobalQuote,
    validateSymbolParam,
} = require('../../middleware/')
const {
    getStockPrice,
    getStockQuote,
} = require('../../controllers/stocks/')

const router = express.Router()

const stockRouter = () => {
    router.use('/stocks', validateSymbolParam, getGlobalQuote)
    router.get('/stocks/price/:symbol', getStockPrice)
    router.get('/stocks/quote/:symbol', getStockQuote)
    return router
}

module.exports = stockRouter
