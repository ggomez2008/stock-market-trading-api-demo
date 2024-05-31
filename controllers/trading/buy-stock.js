const db = require('../../db/get-db-connection')
const { mapGlobalQuote } = require('../../utils/')

const buyStock = async (req, res) => {
    try {
        const { userId, symbol, quantity } = req.body
        const { globalQuote } = res.locals
        const mappedQuote = mapGlobalQuote(globalQuote)
        const { price } = mappedQuote
        // these queries should be in a transaction
        const getUserQuery = `
            SELECT
                *
            FROM
                users
            WHERE
                id=${userId}
        `
        const userResult = await db.raw(getUserQuery)
        const [userRow] = userResult.rows
        if (userRow) {
            const insertTradeQuery = `
                INSERT INTO
                    trades (user_id, transaction_type, symbol, quantity, price)
                VALUES
                    (${userId}, 'buy', '${symbol}', ${quantity}, ${price})
            `
            const insertTradeResult = await db.raw(insertTradeQuery)
            if (insertTradeResult.rowCount > 0) {
                const getStockBalanceQuery = `
                    SELECT
                        balance
                    FROM
                        portfolio
                    WHERE
                        user_id=${userId}
                        AND symbol='${symbol}'
                `
                const getBalanceResult = await db.raw(getStockBalanceQuery)
                const [row] = getBalanceResult.rows
                if (row) {
                    const { balance } = row
                    const newBalance = balance + parseInt(quantity)
                    const updateBalanceQuery = `
                        UPDATE
                            portfolio
                        SET
                            balance = ${newBalance}
                        WHERE
                            user_id=${userId}
                            AND symbol='${symbol}'                        
                    `
                    const updateResult = await db.raw(updateBalanceQuery)
                    if (updateResult.rowCount > 0) res.sendStatus(200)
                    else res.sendStatus(422)
                } else {
                    const addToPortfolioQuery = `
                        INSERT INTO
                            portfolio (user_id, symbol, balance)
                        VALUES
                            (${userId}, '${symbol}', ${quantity})
                    `
                    const insertResult = await db.raw(addToPortfolioQuery)
                    if (insertResult.rowCount > 0) res.sendStatus(200)
                    else res.sendStatus(422)
                }
            } else res.sendStatus(422)
        } else res.sendStatus(404)

    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

module.exports = buyStock
