const express = require('express')
const router = express.Router()
const { getPortfolio } = require('../../controllers/portfolio/')

const portfolioRouter = () => {
    router.get('/portfolio/:userId', getPortfolio)
    return router
}

module.exports = portfolioRouter
