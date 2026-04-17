---
title: "Markdown to HTML"
description: "Convert Markdown text into valid HTML instantly."
---

# Overview
      
      **Heavstal Markdown Engine** provides high-speed conversion of Markdown syntax into secure, sanitized HTML. It supports standard Markdown features including tables, code blocks, and lists.

      ## Endpoint
      `POST /markdown`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | markdown | string | Yes | The raw Markdown text to convert. |

      ## Example Usage
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/markdown', {
        method: 'POST',
        headers: { 'x-api-key': 'YOUR_KEY' },
        body: JSON.stringify({ markdown: '# Hello **World**' })
      });
      ```

      ### Successful Response
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "data": {
          "html": "<h1>Hello <strong>World</strong></h1>\n"
        }
      }
      ```
