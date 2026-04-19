---
title: TikTok Downloader
description: Download TikTok videos or search for keywords without watermarks.
---

A dual-purpose engine. You can provide a direct **TikTok URL** to download a specific video, OR provide a **Search Query** to automatically find and download the top result for that keyword.

## Endpoint
`POST /tiktok`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| query | string | Yes | A valid TikTok URL **OR** a text search term (e.g., "soccer skills"). |
| url | string | Optional | Alias for 'query' (legacy support). |

## Example Usage (Download)
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/tiktok', {
method: 'POST',
headers: { 'x-api-key': 'YOUR_KEY' },
body: JSON.stringify({ query: 'https://vm.tiktok.com/ZGe...' })
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"mode": "search",
"data": {
"title": "Video Caption Here",
"author": "Username",
"video_nowm": "https://...",
"audio": "https://...",
"stats": { "views": 1000, "likes": 500 }
}
}
```

