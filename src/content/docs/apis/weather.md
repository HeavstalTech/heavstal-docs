---
title: "Global Weather"
description: "Real-time weather conditions and forecast for any city."
---

**Heavstal Weather** provides real-time atmospheric data and forecasts. It resolves city names automatically and returns temperature (C/F), humidity, wind speed, and conditions.

## Endpoint
`POST /weather`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| city | string | Yes | The city name (e.g., "Paris", "New York"). |

## Example Usage
```javascript
const res = await fetch('https://heavstal-tech.vercel.app/api/v1/weather', {
method: 'POST',
headers: { 'x-api-key': 'YOUR_KEY' },
body: JSON.stringify({ city: 'Lagos' })
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "location": "Lagos, Nigeria",
  "temp_c": "28",
  "temp_f": "82",
  "condition": "Partly cloudy",
  "humidity": "75%",
  "wind": "15 km/h"
}
}
```

