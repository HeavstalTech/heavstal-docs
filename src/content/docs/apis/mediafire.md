---
title: "MediaFire Downloader"
description: "Documentation for MediaFire Downloader"
---

**MediaFire Direct** scrapes the direct download link from a MediaFire file page. It bypasses the landing page and returns the raw file link, name, and size.

## Endpoint
`POST /mediafire`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| url | string | Yes | The MediaFire sharing URL (e.g., `https://www.mediafire.com/file/...`). |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/mediafire', {
method: 'POST',
headers: { 
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY' 
},
body: JSON.stringify({ url: 'https://www.mediafire.com/file/xk3...' })
});

const data = await res.json();
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "filename": "project_v2.zip",
  "filetype": "ZIP",
  "filesize": "45.2 MB",
  "link": "https://download234.mediafire.com/token/project_v2.zip"
}
}
```

