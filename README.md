# stock-market-trading-api-demo
A simple API service that fetches stock quotes, executes buy/sell orders, and saves a portfolio in a database.

# Routes

## Get Stock Price
Gets the current stock price

**Path**\
/api/stocks/price/:symbol

**Method**\
GET

**Params**\
symbol: a string between 1 and 14 characters

## Get Stock Quote
Gets the current stock quote

**Path**\
/api/stocks/quote/:symbol

**Method**\
GET

**Params**\
symbol: a string between 1 and 14 characters

## Buy Stock
Executes a buy order and saves transaction in a database

**Path**\
/api/market/stock/:symbol

**Method**\
POST

**Params**\
symbol: a string between 1 and 14 characters

**Body (JSON)**\
userId: an integer representing the user\
symbol: a string between 1 and 14 characters\
quantity: an integer representing number of stocks to buy

## Sell Stock
Executes a sell order and saves transaction in a database

**Path**\
/api/market/stock/:symbol

**Method**\
PUT

**Params**\
symbol: a string between 1 and 14 characters

**Body (JSON)**\
userId: an integer representing the user\
symbol: a string between 1 and 14 characters\
quantity: an integer representing number of stocks to sell

## Get Portfolio
Queries a database for the user's portfolio of stocks

**Path**\
/api/portfolio/:userId

**Method**\
GET

**Params**\
userId: an integer representing the user

