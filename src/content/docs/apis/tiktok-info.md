---
title: "TikTok Profile Info"
description: "Retrieve public profile details from TikTok accounts."
---

# Overview
      
      **Heavstal Social Intelligence** retrieves real-time public profile information from TikTok accounts. It provides follower counts, bio, profile pictures, and engagement stats without requiring login.

      ## Endpoint
      `POST /tiktok-info`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | username | string | Yes | The unique TikTok username (e.g., "khaby.lame"). |

      ## Example Usage
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/tiktok-info', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'YOUR_KEY' 
        },
        body: JSON.stringify({ username: 'khaby.lame' })
      });
      
      const data = await res.json();
      ```

      ### Successful Response
      ```json
      {
        "status": "success",
        "code": 200,
        "creator": "HEAVSTAL TECH",
        "data": {
          "name": "Khaby Lame",
          "username": "khaby.lame",
          "followers": 161900000,
          "following": 78,
          "description": "If you want to laugh you are in the right place",
          "profile_picture": "https://p16-sign-va.tiktokcdn.com/..."
        }
      }
      ```
