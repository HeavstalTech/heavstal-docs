---
title: "GitHub Developer Info"
description: "Get developer details, repositories, and bio from GitHub."
---

# Overview
      
      **Heavstal Dev Recon** fetches detailed developer profiles from GitHub. It returns bio, repository counts, follower stats, and account creation dates.

      ## Endpoint
      `POST /github-info`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | username | string | Yes | The GitHub username target (e.g., "vercel"). |

      ## Example Usage
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/github-info', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'YOUR_KEY' 
        },
        body: JSON.stringify({ username: 'torvalds' })
      });
      ```

      ### Successful Response
      ```json
      {
        "status": "success",
        "code": 200,
        "creator": "HEAVSTAL TECH",
        "data": {
          "username": "torvalds",
          "name": "Linus Torvalds",
          "bio": "Linux creator",
          "followers": 195000,
          "public_repos": 7,
          "avatar_url": "https://avatars.githubusercontent.com/u/1024025?v=4",
          "created_at": "2011-09-03T15:26:22Z"
        }
      }
      ```
