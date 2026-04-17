---
title: "CODE-X Encryption"
description: "Enterprise-grade code obfuscation for JS, Python, and Java."
---

# Overview
      
      **CODE-X** is an enterprise-grade code obfuscation and encryption engine. It supports JavaScript (via advanced obfuscation) and Python/Java (via Base64 encoding). Use this to protect your source code before distribution

      ## Endpoint
      `POST /codex`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | code | string | Yes | The raw source code string. |
      | lang | string | Yes | The language of the code. Options: 'js', 'javascript', 'py', 'java'. |

      ## Example Usage

      ### JavaScript Request
      ```javascript
      const payload = {
        lang: "js",
        code: "function hello() { console.log('Secret Code'); }"
      };
      
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/codex', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'x-api-key': 'YOUR_API_KEY' 
          },
          body: JSON.stringify(payload)
      });
      ```

      ### Successful Response (JavaScript)
      Returns heavily obfuscated code that is difficult for humans to reverse-engineer.
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "data": {
          "language": "js",
          "encrypted_code": "var _0x5f2d=['log','Secret Code'];(function(_0x2d8f05,_0x4b81bb){..."
        }
      }
      ```

      ### Successful Response (Python/Java)
      Returns a Base64 encoded string.
      ```json
      {
        "status": "success",
        "data": {
          "language": "py",
          "encrypted_code": "cHJpbnQoIkhlbGxvIFdvcmxkIik="
        }
      }
      ```
