---
title: "APK Downloader"
description: "Search and download Android Apps (APK) directly. Returns version, size, and direct links."
---

**Heavstal APK Engine** allows you to search for Android applications and retrieve direct download links. It fetches the latest version available from the Aptoide network.

## Endpoint
`POST /apk`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| query | string | Yes | The app name (e.g. "Instagram" or "com.instagram.android"). |

## Example Usage
```javascript
const res = await fetch('https://heavstal-tech.vercel.app/api/v1/apk', {
method: 'POST',
headers: { 
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY' 
},
body: JSON.stringify({ 
  query: 'Telegram' 
})
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "name": "Telegram",
  "package": "org.telegram.messenger",
  "version": "10.6.1",
  "size": "75.4 MB",
  "icon": "https://pool.img.aptoide.com/...",
  "download_link": "https://pool.apk.aptoide.com/..."
}
}
```

