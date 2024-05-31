const getStockPrice = (req, res) => {
    try {
        const { globalQuote } = res.locals
        const price = globalQuote['05. price'] || null
        res.json({ price })
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

module.exports = getStockPrice
