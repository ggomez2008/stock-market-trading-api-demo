const validateSymbolParam = (req, res, next) => {
    const symbol = req.params.symbol || req.body.symbol
    const hasSymbol = Boolean(symbol && symbol.length)
    const hasAllNumbers = /^\d+$/.test(symbol)
    const isValidSymbol = hasSymbol
        && !hasAllNumbers
        && symbol.length > 1
        && symbol.length <= 14
    if (isValidSymbol) next()
    else res.sendStatus(400)
}

module.exports = validateSymbolParam
