# Cryptocurrency Data API

This project provides a REST API for retrieving live cryptocurrency prices, market cap, and 24-hour percentage change using the CoinMarketCap API. The API accepts a comma-separated list of cryptocurrency symbols and returns the relevant data in JSON format.

## Features

- Fetches real-time cryptocurrency prices.
- Supports multiple cryptocurrencies in a single request.
- Provides additional information such as market cap and 24-hour percentage change.
- Robust error handling to manage API errors and other issues.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (v14 or later) and npm.
- You have a CoinMarketCap API key. You can obtain one by signing up on [CoinMarketCap](https://coinmarketcap.com/api/).

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/ManuGC22/crypto-api.git
cd crypto-api
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a .env file in the root directory and add your CoinMarketCap API key:

```bash
COINMARKETCAP_API_KEY=your_coinmarketcap_api_key
```

### Running the Server

```bash
npm run dev
```

The server will start on http://localhost:3000.

## API Endpoints

URL: /api/crypto-price
Method: GET

Query Parameters:

- coins (required): A comma-separated list of cryptocurrency symbols (e.g., BTC,ETH,SOL).

Example Request:

```bash
curl "http://localhost:3000/api/crypto-price?coins=BTC,ETH,SOL"
```

Example Response:

```bash
{
  "btc": {
    "usd": 57319,
    "market_cap": 1078496738267,
    "percent_change_24h": -0.25
  },
  "eth": {
    "usd": 4100.67,
    "market_cap": 482673274136,
    "percent_change_24h": 1.52
  },
  "sol": {
    "usd": 192.21,
    "market_cap": 58752345678,
    "percent_change_24h": 3.84
  }
}
```

## Error Handling

The API returns appropriate error messages in the following scenarios:

- Invalid Symbols: If a symbol is not found in the CoinMarketCap data, it will not be included in the response.
- API Errors: If there is an issue with the CoinMarketCap API, the server will log the error and return a 500 error with a relevant message.

## Technologies Used

Node.js: JavaScript runtime environment.
Express: Web framework for Node.js.
Axios: Promise-based HTTP client for making API requests.
dotenv: Module to load environment variables.
