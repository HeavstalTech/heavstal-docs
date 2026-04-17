---
title: "Morse Code Converter"
description: "Translate text to Morse code and decode Morse code back to text."
---

# Overview
      
      **Heavstal Morse Engine** translates standard text into International Morse Code and vice versa. It handles alphanumeric characters and punctuation, using standard spacing for readability.

      ## Endpoint
      `POST /morse`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | text | string | Yes | The input string (Text or Morse code). |
      | mode | string | No | 'encode' (Text to Morse) or 'decode' (Morse to Text). Default: 'encode'. |

      ## Example Usage (Encode)
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/morse', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'YOUR_API_KEY' 
        },
        body: JSON.stringify({ 
          text: 'HELLO WORLD',
          mode: 'encode'
        })
      });
      ```

      ## Example Usage (Decode)
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/morse', {
        method: 'POST',
        headers: { 'x-api-key': 'YOUR_KEY' },
        body: JSON.stringify({ 
          text: '... --- ...',
          mode: 'decode'
        })
      });
      ```

      ### Successful Response
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "data": {
          "input": "HELLO WORLD",
          "output": ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
          "mode": "encode"
        }
      }
      ```
