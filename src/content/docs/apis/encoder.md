---
title: "Universal Encoder"
description: "Smart Base64/Base32 engine. Encodes text and Decodes binary strings back into files (Images, Audio, PDFs) automatically."
---

# Overview
      
      **Heavstal Universal Encoder** is an intelligent transformation engine. It supports standard **Base64** and **Base32** operations but adds a layer of "Smart Detection."

      **✨ Magic Feature:** 
      When decoding, if the engine detects that the result is a binary file (Image, Audio, PDF, Zip) or a massive text block, it will automatically upload the result to a cloud host (Catbox) and return a direct download link instead of crashing your app with raw binary data.

      ## Endpoint
      `POST /encoder`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | text | string | Yes | The string to process. |
      | type | string | No | 'base64' (default) or 'base32'. |
      | mode | string | No | 'encode' (default) or 'decode'. |

      ## Example 1: Text Encoding
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/encoder', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'YOUR_API_KEY' 
        },
        body: JSON.stringify({ 
          text: 'Heavstal Tech',
          mode: 'encode'
        })
      });
      ```

      ### Response (Text)
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "data": {
          "type": "base64",
          "mode": "encode",
          "output": "SGVhdnN0YWwgVGVjaA==",
          "is_file": false
        }
      }
      ```

      ## Example 2: Smart File Decoding
      If you send a Base64 string that represents an image, the API detects it.

      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/encoder', {
        method: 'POST',
        headers: { 'x-api-key': 'YOUR_API_KEY' },
        body: JSON.stringify({ 
          text: '/9j/4AAQSkZJRgABAQAAAQABAAD...', // A long JPG base64 string
          mode: 'decode'
        })
      });
      ```

      ### Response (File Detected)
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "data": {
          "type": "base64",
          "mode": "decode",
          "output": "https://files.catbox.moe/xyz123.jpg",
          "is_file": true,
          "file_type": "JPG",
          "file_size": "450.20 KB"
        }
      }
      ```
