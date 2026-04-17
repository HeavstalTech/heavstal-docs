---
title: "AI Image Generator"
description: "Batch generation engine. Pass a single string or an array of prompts to generate multiple distinct images in parallel."
---

# Overview
      
      **Heavstal Image Engine** uses high-speed latent diffusion models to generate images from text. Unlike standard wrappers, this endpoint **generates, downloads, and re-hosts** the result on a permanent public URL (Catbox), so you don't have to handle binary streams or temporary links.

      It supports **Batch Generation** and **Variations** out of the box.

      ## Endpoint
      `POST /image`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | prompt | string OR array | Yes | Description of the image(s). Pass a string for one, or an array of strings for batching. |
      | count | number | No | Number of variations to generate if 'prompt' is a single string. (Max: 5). |

      ## Example 1: Single Generation
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/image', {
        method: 'POST',
        headers: { 'x-api-key': 'YOUR_KEY' },
        body: JSON.stringify({ 
          prompt: "A cyberpunk city in rain, neon lights" 
        })
      });
      ```

      ## Example 2: Variations (Batch)
      Generate 4 versions of the same concept in parallel.

      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/image', {
        method: 'POST',
        headers: { 'x-api-key': 'YOUR_KEY' },
        body: JSON.stringify({ 
          prompt: "A cute 3D rendered robot",
          count: 4
        })
      });
      ```

      ### Successful Response (Single)
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "data": {
          "prompt": "A cyberpunk city...",
          "url": "https://files.catbox.moe/xyz.jpg",
          "model": "turbo",
          "note": "Hosted via Catbox"
        }
      }
      ```

      ### Successful Response (Batch)
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "batch_size": 4,
        "data": [
          { "status": "success", "url": "https://files.catbox.moe/a.jpg", ... },
          { "status": "success", "url": "https://files.catbox.moe/b.jpg", ... }
        ]
      }
      ```
