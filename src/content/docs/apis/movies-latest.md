---
title: "Latest Movies"
description: "Returns the most recently added movies from the database."
---

**Heavstal Latest Movies API** provides a real-time feed of the newest movies added to the network. This endpoint has a shorter 1-hour cache to ensure your app always displays the freshest releases.

## Endpoint
`POST /api/v1/movies/latest`

## Request Parameters (JSON Body)
| Field | Type | Required | Description | Example |
|---|---|---|---|---|
| limit | integer | No | Results per page (Max 50, Default 20). | `10` |
| page | integer | No | Page number for pagination. | `1` |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/movies/latest', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'x-api-key': 'YOUR_API_KEY' },
  body: JSON.stringify({ limit: 5 })
});
```

## Successful Response
```json
{
  "status": "success",
  "creator": "HEAVSTAL TECH",
  "provider": "yts.gg",
  "cached": false,
  "cache_ttl": 3600,
  "data": {
    "count": 10,
    "page": 1,
    "movies": [
      {
        "id": 77104,
        "title": "40 Dates and 40 Nights",
        "year": 2026,
        "rating": 0,
        "genres": [
          "Comedy",
          "Romance"
        ],
        "poster": "https://yts.gg/assets/images/movies/40_dates_and_40_nights_2026/large-cover.jpg"
      },
      {
        "id": 77103,
        "title": "Lupi nostri",
        "year": 2025,
        "rating": 0,
        "genres": [
          "Documentary"
        ],
        "poster": "https://yts.gg/assets/images/movies/lupi_nostri_2025/large-cover.jpg"
      },
      {
        "id": 77102,
        "title": "Cards & Cognac",
        "year": 2025,
        "rating": 8.1,
        "genres": [
          "Drama"
        ],
        "poster": "https://yts.gg/assets/images/movies/cards_cognac_2025/large-cover.jpg"
      },
      {
        "id": 77101,
        "title": "Bear Country",
        "year": 2026,
        "rating": 7.3,
        "genres": [
          "Action",
          "Thriller"
        ],
        "poster": "https://yts.gg/assets/images/movies/bear_country_2026/large-cover.jpg"
      },
      {
        "id": 77100,
        "title": "Past Life",
        "year": 2025,
        "rating": 7,
        "genres": [
          "Thriller"
        ],
        "poster": "https://yts.gg/assets/images/movies/past_life_2025/large-cover.jpg"
      },
      {
        "id": 77099,
        "title": "Pojedynek",
        "year": 2026,
        "rating": 6.3,
        "genres": [
          "Drama",
          "History",
          "Thriller",
          "War"
        ],
        "poster": "https://yts.gg/assets/images/movies/pojedynek_2026/large-cover.jpg"
      },
      {
        "id": 77098,
        "title": "A Double Life",
        "year": 2023,
        "rating": 8.6,
        "genres": [
          "Documentary"
        ],
        "poster": "https://yts.gg/assets/images/movies/a_double_life_2023/large-cover.jpg"
      },
      {
        "id": 77097,
        "title": "Dos Manzanas",
        "year": 2023,
        "rating": 6.7,
        "genres": [
          "Drama"
        ],
        "poster": "https://yts.gg/assets/images/movies/dos_manzanas_2023/large-cover.jpg"
      },
      {
        "id": 77096,
        "title": "California Schemin'",
        "year": 2025,
        "rating": 7,
        "genres": [
          "Biography",
          "Drama",
          "History",
          "Music"
        ],
        "poster": "https://yts.gg/assets/images/movies/california_schemin_2025/large-cover.jpg"
      },
      {
        "id": 77095,
        "title": "Summerween",
        "year": 2026,
        "rating": 7.1,
        "genres": [
          "Action"
        ],
        "poster": "https://yts.gg/assets/images/movies/summerween_2026/large-cover.jpg"
      }
    ]
  }
}
```
