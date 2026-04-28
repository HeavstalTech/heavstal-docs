---
title: "YouTube Engine"
description: "Search YouTube, stream audio/video, or download direct MP3 and MP4 links."
---

**Heavstal YouTube Downloader** allows you to seamlessly search YouTube and extract direct, high-quality audio (MP3) or video (MP4) download links. It features multiple advanced fallback mechanisms to ensure high availability.
## Endpoint
`POST /youtube`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| type | string | Yes | The action to perform. Valid options: `search`, `ytmp3`, `ytmp4`, `play`. |
| query | string | Conditional | Required if `type` is `search` or `play`. The search term. |
| url | string | Conditional | Required if `type` is `ytmp3` or `ytmp4`. The target YouTube video URL. |
| format | string | No | Used only with `play`. The desired format: `mp3` or `mp4` (Default: `mp3`). |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/youtube', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY' 
  },
  body: JSON.stringify({ 
    type: 'play',
    query: 'Alan Walker Faded',
    format: 'mp3'
  })
});
```

Successful Response
```json
{
  "status": "success",
  "creator": "HEAVSTAL TECH",
  "data": {
    "author": "Heavstal Tech™",
    "title": "Alan Walker - Faded",
    "thumbnail": "https://i.ytimg.com/vi/60ItHLz5WEA/maxresdefault.jpg",
    "channel": "Alan Walker",
    "published": "2015-12-03",
    "views": 3574921000,
    "duration": 213,
    "url": "https://rr4---sn-ab5sznzl.googlevideo.com/videoplayback?..."
  }
}
```
