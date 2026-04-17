---
title: "Smart Web Scraper"
description: "Scrape website: Extract and Summarize content. Supports batch processing (pass a single URL or an array of up to 10 URLs)."
---

**Heavstal Smart Scraper** is an intelligent extraction engine designed to turn websites into structured data. It supports **batch processing** (up to 10 URLs) and features an **AI Analysis Mode** that reads, structures, and categorizes content automatically.

It handles the heavy lifting: resolving relative links, cleaning DOM noise (ads, scripts), and formatting text for machine reading.

## Endpoint
`POST /web-search`

## Features
- **Clean Extraction:** Removes navbars, footers, and scripts to focus on the main content.
- **AI Summarization:** Optional GPT-4 analysis to extract key points and sentiment.
- **Batch Processing:** Scrape up to 10 websites in parallel in a single request.
- **SSRF Protection:** Built-in security against internal network scanning.

## Known Limitations
This endpoint uses a stable, standard browser signature. It does **not** employ aggressive evasion techniques (like residential proxies or CAPTCHA solving). 

**It will NOT work on:**
- Google / YouTube / Facebook / Instagram / LinkedIn / Twitter (X)
- Sites behind aggressive Cloudflare "Under Attack" mode
- Single Page Apps (SPAs) that require Javascript execution to render initial content

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| url | string OR array | Yes | A single URL string OR an array of strings (e.g., `["url1", "url2"]`). |
| summarize | boolean | No | Set to `true` to enable AI analysis. (Default: false) |

## Example 1: Single URL (Raw Text)
Best for simply getting the text content of a blog post or article.

```javascript
const res = await fetch('https://heavstal-tech.vercel.app/api/v1/web-search', {
method: 'POST',
headers: { 'x-api-key': 'YOUR_KEY' },
body: JSON.stringify({ 
  url: 'https://example.com/blog-post' 
})
});
```

## Example 2: Batch Scraping with AI
Scrape multiple pages and get structured reports for each. Ideal for market research or news aggregation.

```javascript
const res = await fetch('https://heavstal-tech.vercel.app/api/v1/web-search', {
method: 'POST',
headers: { 'x-api-key': 'YOUR_KEY' },
body: JSON.stringify({ 
  url: [
    'https://techcrunch.com/article-1',
    'https://verge.com/article-2'
  ],
  summarize: true 
})
});
```

### Successful Response (Batch Mode)
```json
{
"status": "success",
"creator": "HEAVSTAL TECH",
"batch_size": 2,
"data": [
  {
    "url": "https://techcrunch.com/article-1",
    "meta": { "title": "Startup raises $10M..." },
    "content": {
      "summary": "A startup focused on AI has raised Series A funding...",
      "key_points": ["$10M raised", "Led by VC Firm X", "Plans to hire 50 engineers"],
      "sentiment": "positive"
    }
  },
  {
    "url": "https://verge.com/article-2",
    "meta": { "title": "New Phone Review" },
    "content": { ... }
  }
]
}
```

