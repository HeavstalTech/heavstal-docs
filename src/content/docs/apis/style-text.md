---
title: "Stylish Text Generator"
description: "Convert normal text into 30+ fancy font styles (Bold, Cursive, etc.)."
---

# Overview
      
      **Heavstal Style** instantly converts standard ASCII text into over 30+ various Unicode font styles. This is perfect for bio generators, social media captions, and messaging bots.

      ## Endpoint
      `POST /style-text`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | text | string | Yes | The text you want to convert. |

      ## Example Usage
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/style-text', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'YOUR_API_KEY' 
        },
        body: JSON.stringify({ 
          text: 'Heavstal' 
        })
      });
      ```

      ### Successful Response
      Returns an array of style objects.
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "total_styles": 35,
        "data": [
          {
            "author": { "name": "HEAVSTAL TECH" },
            "name": "Black Bubble",
            "result": "🅗🅔🅐🅥🅢🅣🅐🅛"
          },
          {
            "author": { "name": "HEAVSTAL TECH" },
            "name": "Cursive",
            "result": "𝓗𝓮𝓪𝓿𝓼𝓽𝓪𝓵"
          }
        ]
      }
      ```
