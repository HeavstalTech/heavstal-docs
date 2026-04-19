---
title: "Text-to-Speech Engine"
description: "Convert text into lifelike speech audio (MP3). Supports multiple languages."
---

**Heavstal TTS** converts text into natural-sounding speech audio using Google's engine. 

Instead of streaming binary data, this API **generates the audio, hosts it securely, and returns a direct MP3 link**. This makes it perfect for WhatsApp bots, HTML5 players, and mobile apps.

## Endpoint
`POST /tts`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| text | string | Yes | The text to convert (Max ~200 chars recommended). |
| lang | string | No | Language code (default: 'en'). Examples: 'fr', 'es', 'ja', 'id'. |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/tts', {
method: 'POST',
headers: { 
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY' 
},
body: JSON.stringify({ 
  text: 'Bonjour le monde',
  lang: 'fr'
})
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "text": "Bonjour le monde",
  "language": "fr",
  "url": "https://files.catbox.moe/abc1234.mp3",
  "mimetype": "audio/mpeg"
}
}
```

