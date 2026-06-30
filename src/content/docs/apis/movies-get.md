---
title: "Get Movie by ID"
description: "Get full details for a movie by its ID — cast, images, torrents, and suggestions included."
---

**Heavstal Movie Details API** fetches comprehensive metadata for a specific movie. It runs concurrent requests to aggregate the movie's details, high-res screenshots, cast list, and recommended similar movies into a single unified JSON response.

*Note: Responses are cached on the edge for 24 hours, movie details rarely changes anyways.*

## Endpoint
`POST /api/v1/movies/get`

## Request Parameters (JSON Body)
| Field | Type | Required | Description | Example |
|---|---|---|---|---|
| id | integer | Yes | The unique YTS movie ID. | `73` |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/movies/get', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY' 
  },
  body: JSON.stringify({ 
    id: 73
  })
});
```

## Successful Response
```json
{
  "status": "success",
  "creator": "HEAVSTAL TECH",
  "provider": "yts.gg",
  "cached": false,
  "cache_ttl": 86400,
  "data": {
    "id": 73,
    "title": "A Case of You",
    "year": 2013,
    "rating": 5.6,
    "runtime_minutes": 89,
    "genres": [
      "Action",
      "Comedy",
      "Romance"
    ],
    "description": "A young writer tries to impress a girl he meets online with an embellished profile, but he finds himself in a real mess when she falls for him and he has to keep up the act.",
    "yt_trailer_code": "_Zmd_23Tsyc",
    "language": "en",
    "mpa_rating": "R",
    "images": {
      "background": "https://yts.gg/assets/images/movies/A_Case_of_You_2013/background.jpg",
      "poster": "https://yts.gg/assets/images/movies/A_Case_of_You_2013/large-cover.jpg",
      "screenshots": [
        "https://yts.gg/assets/images/movies/A_Case_of_You_2013/large-screenshot1.jpg",
        "https://yts.gg/assets/images/movies/A_Case_of_You_2013/large-screenshot2.jpg",
        "https://yts.gg/assets/images/movies/A_Case_of_You_2013/large-screenshot3.jpg"
      ]
    },
    "cast": [
      {
        "name": "Mizuo Peck",
        "character": "Jemily",
        "image": "https://yts.gg/assets/images/actors/thumb/nm0669693.jpg"
      },
      {
        "name": "Peter Dinklage",
        "character": "Gerard",
        "image": "https://yts.gg/assets/images/actors/thumb/nm0227759.jpg"
      },
      {
        "name": "Sam Rockwell",
        "character": "Gary",
        "image": "https://yts.gg/assets/images/actors/thumb/nm0005377.jpg"
      },
      {
        "name": "Sienna Miller",
        "character": "Sarah",
        "image": "https://yts.gg/assets/images/actors/thumb/nm1092227.jpg"
      }
    ],
    "torrents": [
      {
        "quality": "720p",
        "type": "bluray",
        "size": "751.53 MB",
        "seeds": 1,
        "peers": 0,
        "url": "https://yts.gg/torrent/download/1E7A51C4611BABC7E8D18D8ED7E396C543C740EF",
        "hash": "1E7A51C4611BABC7E8D18D8ED7E396C543C740EF"
      },
      {
        "quality": "1080p",
        "type": "bluray",
        "size": "1.44 GB",
        "seeds": 3,
        "peers": 0,
        "url": "https://yts.gg/torrent/download/333C48DC8A2FC2E00481393608E136C2D6EECCE9",
        "hash": "333C48DC8A2FC2E00481393608E136C2D6EECCE9"
      }
    ],
    "suggestions": [
      {
        "id": 3984,
        "title": "Two Night Stand",
        "year": 2014,
        "rating": 6.3,
        "poster": "https://yts.gg/assets/images/movies/Two_Night_Stand_2014/medium-cover.jpg"
      },
      {
        "id": 4248,
        "title": "Inside Out",
        "year": 2015,
        "rating": 8.1,
        "poster": "https://yts.gg/assets/images/movies/inside_out_2015/medium-cover.jpg"
      }
    ]
  }
}
```
