---
title: "QR Code Generator"
description: "Create custom QR codes with colors. Returns a direct image link."
---

**Heavstal QR Engine** generates high-quality QR codes for URLs, text, Wi-Fi configs, or vCards. The result is uploaded to cloud storage, returning a direct image link you can share or embed immediately.

## Endpoint
`POST /qrcode`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| text | string | Yes | The content to encode (URL, Text, etc.). |
| color | string | No | Dot color in Hex format (Default: #000000). |
| bg | string | No | Background color in Hex format (Default: #ffffff). |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/qrcode', {
method: 'POST',
headers: { 'x-api-key': 'YOUR_KEY' },
body: JSON.stringify({ 
  text: 'https://google.com',
  color: '#ff0000' // Red QR Code
})
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "text": "https://google.com",
  "link": "https://files.catbox.moe/qrcode.png"
}
}
```

