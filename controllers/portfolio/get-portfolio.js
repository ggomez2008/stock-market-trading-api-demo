const db = require('../../db/get-db-connection')

const getPortfolio = async (req, res) => {
    try {
        const { userId } = req.params
        const getPortfolioQuery = `
            SELECT
                *
            FROM
                portfolio
            WHERE
                user_id = '${userId}'
        `
        const result = await db.raw(getPortfolioQuery)
        const { rows } = result
        if (rows && rows.length) res.json({ portfolio: rows })
        else res.sendStatus(404)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

module.exports = getPortfolio
