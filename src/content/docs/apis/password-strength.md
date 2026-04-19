---
title: "Password Strength Auditor"
description: "Analyze password strength, crack time, and improvement suggestions."
---

**Heavstal Security Engine** analyzes passwords using entropy calculations and dictionary matching (zxcvbn). It provides a score (0-4), estimated cracking time, and actionable feedback to improve security.

## Endpoint
`POST /password-strength`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| password | string | Yes | The password string to analyze. |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/password-strength', {
method: 'POST',
headers: { 'x-api-key': 'YOUR_KEY' },
body: JSON.stringify({ password: 'password123' })
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "score": 0,
  "verdict": "Very Weak",
  "crack_time": "Instant",
  "feedback": {
    "warning": "This is a top-10 common password",
    "suggestions": ["Add another word or two", "Avoid common phrases"]
  }
}
}
```

