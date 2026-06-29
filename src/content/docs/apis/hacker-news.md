```markdown
---
title: "Hacker News Top 10"
description: "Fetch the top 10 latest stories from Hacker News with speed."
---

**Heavstal Hacker News API** allows you to seamlessly retrieve the top 10 trending stories currently on the front page of Hacker News with speed.

## Endpoint
`POST /hacker-news`

## Request Parameters
| Field | Type | Required | Description |
|---|---|---|---|
| (None) | - | - | This endpoint does not require any JSON body parameters. |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/hacker-news', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY' 
  },
  body: JSON.stringify({})
});
```

## Successful Response
```json
{
  "status": "success",
  "creator": "HEAVSTAL TECH",
  "cached": false,
  "data": [
    {
      "id": 48713832,
      "title": "HackerRank open sourced its ATS. My resume scored 90/100. Oh wait 74. No – 88",
      "url": "https://danunparsed.com/p/hackerrank-open-source-ats",
      "content": null, // may or may not be available (only exists for "Ask HN" or text-based posts)
      "author": "sambellll",
      "score": 299,
      "time": "2026-06-29T01:44:40.000Z",
      "comments_count": 92
    },
    {
      "id": 48709670,
      "title": "GLM 5.2 beats Claude in our benchmarks",
      "url": "https://semgrep.dev/blog/2026/we-have-mythos-at-home-glm-52-beats-claude-in-our-cyber-benchmarks/",
      "content": null, // may or may not be available
      "author": "jms703",
      "score": 777,
      "time": "2026-06-28T17:50:47.000Z",
      "comments_count": 367
    }
  ]
}
```
