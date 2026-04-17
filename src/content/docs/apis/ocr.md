---
title: "Image To Text (OCR)"
description: "Extract text from images using OCR (Optical Character Recognition)."
---

**Image To Text (OCR)** uses advanced machine learning (Tesseract) to recognize and extract text from images. It supports multiple languages and returns the raw text along with a confidence score.

## Endpoint
`POST /ocr`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| url | string | Yes | Direct URL to the image file (JPG, PNG, BMP). |
| lang | string | No | Language code (default: 'eng'). [See supported codes](https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400). |

## Example Usage
```javascript
const res = await fetch('https://heavstal-tech.vercel.app/api/v1/ocr', {
method: 'POST',
headers: { 
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY' 
},
body: JSON.stringify({ 
  url: 'https://i.imgur.com/example.png',
  lang: 'eng' 
})
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "confidence": 92.5,
  "text": "HEAVSTAL TECH\nBuilding the future."
}
}
```

