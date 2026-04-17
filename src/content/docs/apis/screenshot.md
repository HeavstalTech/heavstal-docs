---
title: "Website Screenshot Engine"
description: "Capture high-quality screenshots of websites with device emulation."
---

# Overview
      
      **Heavstal Screenshot** uses the "@heavstaltech/api" module's engine to capture high-quality screenshots of websites. It supports device emulation for responsive testing.

      > **Note:** Due to IP reputation, some sites (like Cloudflare-protected pages) may block the request.

      ## Endpoint
      `POST /screenshot`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | url | string | Yes | The URL to capture. |
      | type | string | No | 'desktop' (default), 'tablet', or 'phone'. |

      ## Example Usage
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/screenshot', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'YOUR_API_KEY' 
        },
        body: JSON.stringify({ 
          url: 'https://example.com',
          type: 'phone' 
        })
      });
      ```

      ### Successful Response
      Returns a JSON object containing the hosted image link.
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "data": {
          "title": "Website Screenshot",
          "url": "https://example.com",
          "device": "phone",
          "provider": "Heavstal API",
          "link": "https://files.catbox.moe/xxx.jpg"
        }
      }
      ```
