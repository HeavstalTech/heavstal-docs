---
title: Introduction
description: Welcome to Heavstal Cloud APIs
---

Heavstal Tech™ provides a suite of high-performance APIs designed to empower the next generation of applications. From conversational AI to cryptographic security, our endpoints are built for speed, reliability, and ease of use.

## Authentication
All API requests require an **API Key**. You can generate one in your [Credentials Dashboard](https://heavstal-tech.vercel.app/credentials).

Authenticate by passing the key in the `x-api-key` header.

```bash
curl -X POST https://heavstal-tech.vercel.app/api/v1/jeden \
  -H "Content-Type: application/json" \
  -H "x-api-key: ht_live_xxxxxxxxxxxxxxxx" \
  -d '{"prompt": "Hello"}'
```

## Base URL
All endpoints live under:
```text
https://heavstal-tech.vercel.app/api/v1
```

## Response Format
All responses are returned in JSON format.

### Success Response
```json
{
  "status": "success",
  "creator": "Heavstal Tech",
  "data": { ... }
}
```

### Error Response
```json
{
  "error": "Short error message",
  "details": "Detailed explanation (optional)"
}
```
