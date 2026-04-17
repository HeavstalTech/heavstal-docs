---
title: "URL Metadata Fetcher"
description: "Extract title, description, images, and favicons from any URL."
---

**Heavstal Metadata** scrapes a webpage to extract Open Graph (OG) tags, Twitter Card tags, and standard HTML metadata. This is perfect for generating rich link previews for chat bots or applications.

## Endpoint
`POST /metadata`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| url | string | Yes | The target website URL (must start with http/https). |

## Example Usage
```javascript
const res = await fetch('https://heavstal-tech.vercel.app/api/v1/metadata', {
method: 'POST',
headers: { 
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY' 
},
body: JSON.stringify({ url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' })
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "title": "Rick Astley - Never Gonna Give You Up",
  "description": "The official video for...",
  "image": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "favicon": "https://www.youtube.com/s/desktop/favicon.ico",
  "site_name": "YouTube"
}
}
```

