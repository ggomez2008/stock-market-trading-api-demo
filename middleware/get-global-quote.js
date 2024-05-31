const fetch = require('node-fetch')
const { getGlobalQuoteUrl } = require('../utils/')

const getGlobalQuote = async (req, res, next) => {
    try {
        const method = 'GET'
        const headers = { 'User-Agent': 'request' }
        const url = getGlobalQuoteUrl(req)
        const options = { method, headers }
        const response = await fetch(url, options)
        if (response.ok) {
            const data = await response.json()
            const hasError = Boolean(data['Error Message'] && data['Error Message'].length)
            if (hasError) throw Error
            else {
                const globalQuote = data['Global Quote'] || {}
                res.locals.globalQuote = globalQuote
                next()
            }
        } else res.sendStatus(res.status)
    } catch (err) {
        res.sendStatus(500)
    }
}

module.exports = getGlobalQuote
