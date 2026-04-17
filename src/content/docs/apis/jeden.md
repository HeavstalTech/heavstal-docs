---
title: "Heavstal Jeden API"
description: "Documentation for Heavstal Jeden API"
---

**Heavstal Jeden** is an advanced conversational AI engine optimized for natural, witty, and context-aware interactions. Unlike standard LLMs, Jeden can be injected with specific "Personas" to alter its tone and behavior instantly.

## Endpoint
`POST /jeden`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| prompt | string | Yes | The user's input message. |
| persona | string | No | Defines the AI's character (e.g., "Sarcastic Bot", "Helpful Doctor"). |

## Example Usage

### JavaScript / TypeScript
```javascript
const response = await fetch('https://heavstal-tech.vercel.app/api/v1/jeden', {
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
  "model": "Heavstal-Jeden-4",
  "response": "Verily, little one! Imagine a tiny ball that can be in two places at once..."
}
}
```

