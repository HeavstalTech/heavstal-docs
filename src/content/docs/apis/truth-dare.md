---
title: "Truth or Dare Engine"
description: "Get random Truth questions or Dare challenges with themed images."
---

**Heavstal Game Engine** provides random "Truth" questions or "Dare" challenges. It creates a fun, interactive experience for bots and games.

It returns the text challenge along with a thematic image URL to make the response visually appealing.

## Endpoint
`POST /truth-dare`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| type | string | Yes | Select mode: 'truth' or 'dare'. |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/truth-dare', {
method: 'POST',
headers: { 
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY' 
},
body: JSON.stringify({ 
  type: 'dare' 
})
});
```

### Successful Response
```json
{
"status": "success",
"code": 200,
"creator": "HEAVSTAL TECH",
"data": {
  "image": "https://files.catbox.moe/dare2.jpg",
  "type": "dare",
  "result": "Do 20 pushups immediately."
}
}
```

