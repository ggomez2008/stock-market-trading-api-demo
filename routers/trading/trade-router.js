const express = require('express')
const router = express.Router()
const {
    getGlobalQuote,
    validateSymbolParam,
} = require('../../middleware/')
const {
    buyStock,
    sellStock,
} = require('../../controllers/trading')

const tradingRouter = () => {
    router.use('/market', validateSymbolParam, getGlobalQuote)
    router.post('/market/stock/:symbol', buyStock)
    router.put('/market/stock/:symbol', sellStock)
    return router
}

module.exports = tradingRouter
