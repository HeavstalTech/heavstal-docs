---
title: "AI Image Generator"
description: "Batch generation engine. Pass a single string or an array of prompts to generate multiple distinct images in parallel."
---

**Heavstal Image Engine** uses high-speed latent diffusion models to generate images from text and provides you with a download link.

## Endpoint
`POST /image`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| prompt | string | Yes | Description of the image(s). Pass a string |
| count | number | No | null |

## Example 1: Single Generation
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/image', {
method: 'POST',
headers: { 'x-api-key': 'YOUR_KEY' },
body: JSON.stringify({ 
  prompt: "A cyberpunk city in rain, neon lights" 
})
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "prompt": "A cyberpunk city...",
  "url": "https://img-url.com/xyz.jpg",
  "model": "turbo",
  "note": "Hosted via Catbox"
}
}
```
