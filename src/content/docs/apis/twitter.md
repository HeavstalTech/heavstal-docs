---
title: "Twitter / X Downloader"
description: "Download videos and GIFs from Twitter (X) in HD or SD qualities."
---

# Overview
      
      **Heavstal X Engine** allows you to extract media from Tweets. It supports both legacy `twitter.com` links and modern `x.com` links. It automatically resolves the highest quality available.

      ## Endpoint
      `POST /twitter`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | url | string | Yes | The link to the Tweet containing the video or GIF. |

      ## Example Usage
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/twitter', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'YOUR_API_KEY' 
        },
        body: JSON.stringify({ 
          url: 'https://x.com/user/status/123456789' 
        })
      });
      ```

      ### Successful Response
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "data": {
          "description": "This is a funny video caption",
          "thumbnail": "https://pbs.twimg.com/media/...",
          "video_hd": "https://video.twimg.com/.../vid/720x1280/file.mp4",
          "video_sd": "https://video.twimg.com/.../vid/320x560/file.mp4",
          "audio": null
        }
      }
      ```
