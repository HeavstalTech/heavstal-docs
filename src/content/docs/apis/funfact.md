---
title: "General Fun Facts"
description: "Get random interesting facts."
---

# Overview
      
      **Fun Facts API** returns a random, interesting fact from our curated database covering history, science, nature, and technology. No input required.

      ## Endpoint
      `POST /funfact`

      ## Request Parameters
      _None required._

      ## Example Usage
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/funfact', {
        method: 'POST',
        headers: { 'x-api-key': 'YOUR_API_KEY' }
      });
      ```

      ### Successful Response
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "data": {
          "id": 14,
          "category": "animals",
          "fact": "Wombat poop is cube-shaped to stop it from rolling away."
        }
      }
      ```
