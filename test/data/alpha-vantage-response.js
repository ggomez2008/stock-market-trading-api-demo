const response = {
    status: 200,
    ok: true,
    json: async () => {
        const gq = {
            'Global Quote': {
                '01. symbol': 'IBM',
                '02. open': '168.0000',
                '03. high': '168.6300',
                '04. low': '166.2100',
                '05. price': '167.0500',
                '06. volume': '4206576',
                '07. latest trading day': '2024-05-29',
                '08. previous close': '169.6600',
                '09. change': '-2.6100',
                '10. change percent': '-1.5384%'
            }
        }
        return gq
    }
}

module.exports = response
