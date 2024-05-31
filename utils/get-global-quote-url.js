const getGlobalQuoteUrl = req => {
    const domain = 'https://www.alphavantage.co'
    const path = '/query'
    const apiFunction = 'GLOBAL_QUOTE'
    const { symbol } = req.params
    const apiKey = process.env.ALPHA_VANTAGE_API_KEY
    const pathParams = `?function=${apiFunction}&symbol=${symbol}&apikey=${apiKey}`
    const url = `${domain}${path}${pathParams}`
    return url
}

module.exports = getGlobalQuoteUrl
