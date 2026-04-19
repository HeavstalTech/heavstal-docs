---
title: "HTTP Status Checker"
description: "Check if a website is Up or Down, including latency and headers."
---

**Heavstal Status Monitor** performs a real-time health check on any URL. It measures the response time (latency), captures the HTTP status code, and identifies the server technology if available.

## Endpoint
`POST /http-status`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| url | string | Yes | The URL to inspect. |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/http-status', {
method: 'POST',
headers: { 'x-api-key': 'YOUR_KEY' },
body: JSON.stringify({ url: 'https://github.com' })
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "url": "https://github.com",
  "status": "UP",
  "code": 200,
  "latency": "145ms",
  "ip": "140.82.121.3"
}
}
```

