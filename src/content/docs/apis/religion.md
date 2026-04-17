---
title: "Religion: Bible/Quaran"
description: "Retrieve sacred texts from the Bible or Quran (includes Audio & Arabic)."
---

**Religion API** allows you to retrieve sacred texts from the **Bible** and **Quran**. 

- **Bible:** Supports multiple translations (KJV, WEB, BBE, etc.).
- **Quran:** Returns Arabic text, English translation, and audio.

## Endpoint
`POST /religion`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| type | string | Yes | 'bible' or 'quran'. |
| reference | string | Yes | Format: "Book Chapter:Verse" or "Surah:Ayah". |
| version | string | No | Bible translation code. Default: 'web'. Options: `kjv`, `bbe`, `oeb-us`, `web`. |

## Example: Bible (KJV)
```javascript
const res = await fetch('https://heavstal-tech.vercel.app/api/v1/religion', {
method: 'POST',
headers: { 'Content-Type': 'application/json', 'x-api-key': 'KEY' },
body: JSON.stringify({ 
  type: 'bible', 
  reference: 'John 3:16',
  version: 'kjv'
})
});
```

### Successful Response (Bible)
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"data": {
  "type": "bible",
  "reference": "John 3:16",
  "text": "For God so loved the world...",
  "version": "King James Version",
  "version_id": "kjv"
}
}
```

