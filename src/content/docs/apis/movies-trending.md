---
title: "Trending Movies"
description: "Returns the top trending/most-downloaded movies from the database."
---

**Heavstal Trending Movies API** provides a pre-sorted feed of the most popular and highly-downloaded movies right now. Perfect for populating the "Featured" or "Hot" sections of your streaming app.

## Endpoint
`POST /api/v1/movies/trending`

## Request Parameters (JSON Body)
| Field | Type | Required | Description | Example |
|---|---|---|---|---|
| limit | integer | No | Results per page (Max 50, Default 20). | `10` |
| page | integer | No | Page number for pagination. | `1` |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/movies/trending', {
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
  "cache_ttl": 21600,
  "data": {
    "count": 10,
    "page": 1,
    "movies": [
      {
        "id": 2934,
        "title": "Superbad",
        "year": 2007,
        "rating": 7.6,
        "genres": [
          "Action",
          "Comedy"
        ],
        "poster": "https://yts.gg/assets/images/movies/Superbad_2007/large-cover.jpg"
      },
      {
        "id": 8462,
        "title": "Avengers: Infinity War",
        "year": 2018,
        "rating": 8.4,
        "genres": [
          "Action",
          "Adventure",
          "Drama",
          "Fantasy",
          "Sci-Fi"
        ],
        "poster": "https://yts.gg/assets/images/movies/avengers_infinity_war_2018/large-cover.jpg"
      },
      {
        "id": 42950,
        "title": "Doctor Strange in the Multiverse of Madness",
        "year": 2022,
        "rating": 6.8,
        "genres": [
          "Action",
          "Adventure",
          "Fantasy",
          "Horror",
          "Sci-Fi"
        ],
        "poster": "https://yts.gg/assets/images/movies/doctor_strange_in_the_multiverse_of_madness_2022/large-cover.jpg"
      },
      {
        "id": 13106,
        "title": "Avengers: Endgame",
        "year": 2019,
        "rating": 8.4,
        "genres": [
          "Action",
          "Adventure",
          "Drama",
          "Sci-Fi"
        ],
        "poster": "https://yts.gg/assets/images/movies/avengers_endgame_2019/large-cover.jpg"
      },
      {
        "id": 8539,
        "title": "Deadpool 2",
        "year": 2018,
        "rating": 7.6,
        "genres": [
          "Action",
          "Adventure",
          "Comedy",
          "Sci-Fi"
        ],
        "poster": "https://yts.gg/assets/images/movies/deadpool_2_2018/large-cover.jpg"
      },
      {
        "id": 7709,
        "title": "Black Panther",
        "year": 2018,
        "rating": 7.3,
        "genres": [
          "Action",
          "Adventure",
          "Sci-Fi"
        ],
        "poster": "https://yts.gg/assets/images/movies/black_panther_2018/large-cover.jpg"
      },
      {
        "id": 7025,
        "title": "Thor: Ragnarok",
        "year": 2017,
        "rating": 7.9,
        "genres": [
          "Action",
          "Adventure",
          "Comedy",
          "Fantasy",
          "Sci-Fi"
        ],
        "poster": "https://yts.gg/assets/images/movies/thor_ragnarok_2017/large-cover.jpg"
      },
      {
        "id": 6336,
        "title": "Doctor Strange",
        "year": 2016,
        "rating": 7.5,
        "genres": [
          "Action",
          "Adventure",
          "Fantasy",
          "Sci-Fi"
        ],
        "poster": "https://yts.gg/assets/images/movies/doctor_strange_2016/large-cover.jpg"
      },
      {
        "id": 40617,
        "title": "Spider-Man: No Way Home",
        "year": 2021,
        "rating": 8.1,
        "genres": [
          "Action",
          "Adventure",
          "Fantasy",
          "Sci-Fi"
        ],
        "poster": "https://yts.gg/assets/images/movies/spider_man_no_way_home_2021/large-cover.jpg"
      },
      {
        "id": 6668,
        "title": "Guardians of the Galaxy Vol. 2",
        "year": 2017,
        "rating": 7.6,
        "genres": [
          "Action",
          "Adventure",
          "Comedy",
          "Fantasy",
          "Music",
          "Sci-Fi",
          "Western"
        ],
        "poster": "https://yts.gg/assets/images/movies/guardians_of_the_galaxy_vol_2_2017/large-cover.jpg"
      }
    ]
  }
}
```
