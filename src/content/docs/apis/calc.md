---
title: "Heavstal Calculator"
description: "Documentation for Heavstal Calculator"
---

**Heavstal Calc** is a high-precision mathematical engine powered by MathJS. It allows for complex expression evaluation via API, useful for bots or apps needing safe math parsing.

## Endpoint
`POST /calc`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| expr | string | Yes | The mathematical expression to evaluate. |

## Supported Operations
- Arithmetic: `+`, `-`, `*`, `/`, `^`
- Functions: `sqrt()`, `sin()`, `cos()`, `log()`
- Unit conversion: `5 cm to inch`

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/calc', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY' 
  },
  body: JSON.stringify({ "expr": "sqrt(16) + 5^2" })
});

const data = await res.json();
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "expression": "sqrt(16) + 5^2",
  "result": "29"
}
}
```

