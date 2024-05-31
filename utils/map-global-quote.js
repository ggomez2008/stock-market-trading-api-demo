const mapGlobalQuote = globalQuote => {
    const maps = {
        '01. symbol': 'symbol',
        '02. open': 'open',
        '03. high': 'high',
        '04. low': 'low',
        '05. price': 'price',
        '06. volume': 'volume',
        '07. latest trading day': 'latestTradingDay',
        '08. previous close': 'previousClose',
        '09. change': 'change',
        '10. change percent': 'changePercent'
    }
    const keys = Object.keys(maps)
    const mappedQuote = {}
    keys.forEach(key => {
        const mappedKey = maps[key]
        const value = globalQuote[key] || null
        mappedQuote[mappedKey] = value
    })
    return mappedQuote
}

module.exports = mapGlobalQuote
