---
title: "Universal Lyrics Engine"
description: "Fetch accurate song lyrics and metadata using a multi-source engine (LRCLIB + Genius)."
---

**Heavstal Lyrics** is a high-availability lyrics fetcher. It aggregates data from open-source libraries (LRCLIB) and metadata providers (Genius) to ensure you get results without IP blocks.

## Endpoint
`POST /lyrics`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| query | string | Yes | The song title and artist (e.g. "Mockingbird Eminem"). |

## Example Usage
```javascript
const res = await fetch('https://heavstal-tech.vercel.app/api/v1/lyrics', {
method: 'POST',
headers: { 
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY' 
},
body: JSON.stringify({ 
  query: 'Billie Eilish Bad Guy' 
})
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "title": "bad guy",
  "artist": "Billie Eilish",
  "image": "https://i.scdn.co/image/...",
  "url": "https://lrclib.net/api/get/...",
  "lyrics": "White shirt now red, my bloody nose..."
}
}
```

