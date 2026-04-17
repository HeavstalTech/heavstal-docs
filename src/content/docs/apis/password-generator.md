---
title: "Secure Password Generator"
description: "Generate strong, random passwords with custom criteria."
---

**Heavstal Keygen** creates cryptographically secure passwords. Unlike standard random generators, this uses high-entropy randomness suitable for production security keys and user credentials.

## Endpoint
`POST /password-generator`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| length | number | No | Length of the password (Min: 4, Max: 128, Default: 16). |
| uppercase | boolean | No | Include A-Z? (Default: true). |
| numbers | boolean | No | Include 0-9? (Default: true). |
| symbols | boolean | No | Include !@#$%...? (Default: true). |

## Example Usage
```javascript
const res = await fetch('https://heavstal-tech.vercel.app/api/v1/password-generator', {
method: 'POST',
headers: { 'x-api-key': 'YOUR_KEY' },
body: JSON.stringify({ length: 24, symbols: false })
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "password": "x9L2mP5q...",
  "length": 24,
  "entropy_bits": 142
}
}
```

