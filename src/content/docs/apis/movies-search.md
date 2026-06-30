---
title: "Search Movies"
description: "List and search movies. Filter by genre, sort order, minimum rating, and pages."
---

**Heavstal Movie Search API** allows developers to build full-scale movie catalogues. It retrieves rich metadata, cover images, torrent distributions and more.

*Note: This endpoint utilizes a 12-hour edge cache for blistering speeds, in some cases torrents may not be available.

## Endpoint
`POST /api/v1/movies/search`

## Request Parameters (JSON Body)
| Field | Type | Required | Description | Example |
|---|---|---|---|---|
| query | string | No | Search query / Movie title. | `"Inception"` |
| page | integer | No | Page number for pagination. | `1` |
| limit | integer | No | Results per page (Max 50, Default 10). | `10` |
| genre | string | No | Genre filter (e.g., Action, Drama, Sci-Fi). | `"Action"` |
| sort_by | string | No | Sort by: `title`, `year`, `rating`, `peers`, `seeds`, `download_count`, `like_count`, `date_added`. | `"rating"` |
| min_rating | number | No | Minimum IMDb rating (0-9). | `7.5` |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/movies/search', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY' 
  },
  body: JSON.stringify({ 
    query: "Inception",
    limit: 1
  })
});
```

## Successful Response
```json
{
  "status": "success",
  "creator": "HEAVSTAL TECH",
  "provider": "yts.gg",
  "cached": true,
  "cache_ttl": 43190,
  "data": {
    "count": 1,
    "total": 1,
    "page": 1,
    "movies": [
      {
        "id": 1,
        "title": "Inception",
        "description": "A thief who steals corporate secrets through the use of dream-sharing technology...",
        "year": 2010,
        "rating": 8.8,
        "genres": ["Action", "Adventure", "Sci-Fi"],
        "poster": "https://yts.gg/assets/images/movies/inception_2010/large-cover.jpg",
        "torrents": [
          {
            "quality": "1080p",
            "type": "web",
            "size": "2.1 GB",
            "seeds": 1250,
            "peers": 340,
            "url": "https://yts.gg/torrent/download/..."
          }
        ] // Note: Torrents array may be empty in some cases
      }
    ]
  }
}
```
