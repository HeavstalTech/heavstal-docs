---
title: "Live Crypto Prices"
description: "Returns live cryptocurrency prices for top assets. Cached for 5 minutes."
---

**Heavstal Crypto API** provides real-time pricing, 24-hour percentage changes, market cap, and volume for the top 200 cryptocurrencies. To ensure extreme speed and stability, responses are cached for exactly 5 minutes. 

It includes built-in timeout protection to guarantees fast responses even if the upstream provider hangs.

> [!NOTE]
> Crypto prices are aggregated from third-party providers and may be delayed or inaccurate due to cache. This API is intended for informational purposes and should not be used as the sole source for trading or financial decisions.

## Endpoint
`POST /crypto`

## Request Parameters (JSON Body)
| Field | Type | Required | Description | Example |
|---|---|---|---|---|
| limit | integer | No | Number of coins to return (Max 20. Default is 10). | `5` |
| symbol | string | No | Filter results by a specific coin symbol. | `"BTC"` |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/crypto', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY' 
  },
  body: JSON.stringify({ 
    limit: 2,
    symbol: "ETH" 
  })
});
```

## Successful Response
```json
{
  "status": "success",
  "creator": "HEAVSTAL TECH",
  "provider": "CoinGecko",
  "cached": true,
  "cache_ttl": 248,
  "timestamp": "2026-06-29T10:08:45Z",
  "data": [
    {
      "id": "ethereum",
      "rank": 2,
      "symbol": "ETH",
      "name": "Ethereum",
      "price_usd": "3450.21",
      "change_24h_percent": "1.45",
      "market_cap_usd": "415000000000",
      "volume_24h_usd": "12500000000"
    }
  ]
}
```
