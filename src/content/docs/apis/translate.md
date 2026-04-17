---
title: "Universal Translator"
description: "Auto-detects and translates any language text into English."
---

# Overview
      
      **Heavstal Translator** automatically detects the source language of your text and translates it into English. It uses advanced neural machine translation logic.

      ## Endpoint
      `POST /translate`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | text | string | Yes | The text string you want to translate (any language). |

      ## Example Usage
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/translate', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'YOUR_API_KEY' 
        },
        body: JSON.stringify({ text: "Bonjour tout le monde" })
      });
      ```

      ### Successful Response
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "data": {
          "original": "Bonjour tout le monde",
          "translated": "Hello everyone",
          "source_language": "fr",
          "pronunciation": "bon-zhoor..."
        }
      }
      ```
