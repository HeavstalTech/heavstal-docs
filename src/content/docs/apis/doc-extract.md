---
title: "Universal Document Extractor"
description: "Extract text from PDF, DOCX, TXT, and Code files."
---

**Heavstal Universal Extractor** is a multi-format parsing engine. It accepts a direct URL to a document or code file and returns the clean, raw text content. This is ideal for feeding documents into LLMs or search indexes.

## Supported Formats
- **PDF** (.pdf)
- **Word** (.docx)
- **Plain Text** (.txt)
- **Code** (.js, .ts, .py, .java, .html, .css, .json, .md, etc.)

## Endpoint
`POST /doc-extract`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| url | string | Yes | Direct URL to the file. |

## Example Usage
```javascript
const res = await fetch('https://heavstal-tech.vercel.app/api/v1/doc-extract', {
method: 'POST',
headers: { 
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY' 
},
body: JSON.stringify({ url: 'https://example.com/contract.docx' })
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "detected_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "extension": "docx",
  "content": "Contract Agreement\nThis agreement is made between..."
}
}
```

