const { mapGlobalQuote } = require('../../utils/')

const getStockQuote = (req, res) => {
    try {
        const { globalQuote } = res.locals
        const quote = mapGlobalQuote(globalQuote)
        res.json(quote)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

module.exports = getStockQuote
