---
title: "Heavstal AI API"
description: "Documentation for Heavstal Jeden API"
---

**Heavstal AI** is an advanced conversational AI engine optimized for natural, witty, and context-aware interactions. Same API that powers "Gideon" of Verselor-V1

## Endpoint
`POST /ai`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| prompt | string | Yes | The user's input message. |
| persona | string | No | Defines the AI's character (e.g., "Sarcastic Bot", "Helpful Doctor"). |

## Example Usage

### JavaScript / TypeScript
```javascript
const response = await fetch('https://heavstal.com.ng/api/v1/ai', {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY'
},
body: JSON.stringify({
  prompt: "Explain quantum physics like I'm 5",
  persona: "A friendly 18th-century wizard"
})
});

const data = await response.json();
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "model": "Heavstal-AI-4",
  "response": "Verily, little one! Imagine a tiny ball that can be in two places at once..."
}
}
```
