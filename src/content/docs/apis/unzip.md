---
title: "Zip to Text Extractor"
description: "Extract entire codebases or zip archives into a single formatted text file. Ideal for LLM Context."
---

**Heavstal Unzip** is a specialized tool for developers and AI engineers. It downloads a remote ZIP file, recursively extracts every file inside, and compiles them into a single, structured `.txt` file.

This is extremely useful for feeding an entire project codebase into ChatGPT, Claude, or DeepSeek for analysis without manually copying files.

## Endpoint
`POST /unzip`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| url | string | Yes | Direct URL to the .zip file (e.g. GitHub archive link). |
| includeBinary | boolean | No | If `true`, images/PDFs are converted to Base64. If `false`, they are skipped to save space. Default: `false`. |

## Example Usage
```javascript
const res = await fetch('https://heavstal-tech.vercel.app/api/v1/unzip', {
method: 'POST',
headers: { 
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY' 
},
body: JSON.stringify({ 
  url: 'https://github.com/HeavstalTech/api/archive/refs/heads/main.zip',
  includeBinary: false
})
});
```

### Successful Response
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "source": "https://...",
  "result_file": "https://files.catbox.moe/codebase.txt",
  "format": "txt",
  "binary_included": false
}
}
```

