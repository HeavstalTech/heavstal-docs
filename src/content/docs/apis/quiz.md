---
title: "Academic Quiz Engine"
description: "Documentation for Academic Quiz Engine"
---

# Overview
      
      **Heavstal Quiz Engine** generates random multiple-choice questions (MCQs) for educational purposes. It covers core STEM subjects including Physics, Chemistry, Biology, Mathematics, and Computer Science.

      It supports **Batch Generation**, allowing you to fetch up to 10 unique questions in a single request without duplicates.

      ## Endpoint
      `POST /quiz`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | subject | string | No | Filter by subject. Options: `physics`, `chemistry`, `biology`, `mathematics`, `computer`. If omitted, returns mixed subjects. |
      | count | number | No | Number of questions to retrieve (Max: 10, Default: 1). |

      ## Example Usage (Single Question)
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/quiz', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'YOUR_API_KEY' 
        },
        body: JSON.stringify({ 
          subject: 'computer' // you can as well replace with "random" to get random quiz
        })
      });
      ```

      ## Example Usage (Batch Fetch)
      Get 5 random Mathematics questions.

      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/quiz', {
        method: 'POST',
        headers: { 'x-api-key': 'YOUR_KEY' },
        body: JSON.stringify({ 
          subject: 'mathematics', // you can as well replace with "random" to get random quiz
          count: 5
        })
      });
      ```

      ### Successful Response
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "total_results": 1,
        "subject": "physics",
        "data": [
          {
            "id": 1,
            "subject": "physics",
            "question": "What is the SI unit of Force?",
            "options": [
              "Joule",
              "Newton",
              "Watt",
              "Pascal"
            ],
            "answer": "Newton"
          }
        ]
      }
      ```
