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
| id | integer | Yes | The unique YTS movie ID. | `11` |

## Example Usage
```javascript
const res = await fetch('https://heavstal.com.ng/api/v1/movies/get', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY' 
  },
  body: JSON.stringify({ 
    id: 11
  })
});
```

## Successful Response
```json
{
  "status": "success",
  "creator": "HEAVSTAL TECH",
  "provider": "yts.lt",
  "cached": false,
  "cache_ttl": 86400,
  "data": {
    "id": 11,
    "title": "13 Eerie",
    "year": 2013,
    "rating": 4.5,
    "runtime_minutes": 87,
    "genres": [
      "Action",
      "Horror",
      "Sci-Fi"
    ],
    "description": "Six forensic undergrads embark on a scientific expedition to a remote island that was once used as illegal biological testing grounds for life-term prisoners.",
    "yt_trailer_code": "Mr0NM0draJo",
    "language": "en",
    "mpa_rating": "Not Rated",
    "images": {
      "background": "https://yts.gg/assets/images/movies/13_Eerie_2013/background.jpg",
      "poster": "https://yts.gg/assets/images/movies/13_Eerie_2013/large-cover.jpg",
      "screenshots": [
        "https://yts.gg/assets/images/movies/13_Eerie_2013/large-screenshot1.jpg",
        "https://yts.gg/assets/images/movies/13_Eerie_2013/large-screenshot2.jpg",
        "https://yts.gg/assets/images/movies/13_Eerie_2013/large-screenshot3.jpg"
      ]
    },
    "cast": [
      {
        "name": "Brendan Fehr",
        "character": "Daniel",
        "image": "https://yts.gg/assets/images/actors/thumb/nm0270451.jpg"
      },
      {
        "name": "Katharine Isabelle",
        "character": "Megan",
        "image": "https://yts.gg/assets/images/actors/thumb/nm0410622.jpg"
      },
      {
        "name": "Jesse Moss",
        "character": "Patrick",
        "image": "https://yts.gg/assets/images/actors/thumb/nm1536605.jpg"
      },
      {
        "name": "Shannon Jardine",
        "character": "Skinhead Nazi Zombie",
        "image": null
      }
    ],
    "torrents": [
      {
        "quality": "720p",
        "type": "bluray",
        "size": "698.43 MB",
        "seeds": 0,
        "peers": 0,
        "file_download": "https://yts.gg/torrent/download/9E74E644A45E1A7F5520ED6C046410A1E733ADFB",
        "magnet_url": "magnet:?xt=urn:btih:9E74E644A45E1A7F5520ED6C046410A1E733ADFB&dn=13%20Eerie%20720p%20[YTS.MX]&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969",
        "hash": "9E74E644A45E1A7F5520ED6C046410A1E733ADFB"
      },
      {
        "quality": "1080p",
        "type": "bluray",
        "size": "1.24 GB",
        "seeds": 1,
        "peers": 0,
        "file_download": "https://yts.gg/torrent/download/B423E5BDFAC29096C11015DAA72401C769FFCA10",
        "magnet_url": "magnet:?xt=urn:btih:B423E5BDFAC29096C11015DAA72401C769FFCA10&dn=13%20Eerie%201080p%20[YTS.MX]&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969",
        "hash": "B423E5BDFAC29096C11015DAA72401C769FFCA10"
      }
    ],
    "suggestions": [
      {
        "id": 6941,
        "title": "Flatliners",
        "year": 2017,
        "rating": 5.2,
        "poster": "https://yts.gg/assets/images/movies/flatliners_2017/medium-cover.jpg"
      },
      {
        "id": 6984,
        "title": "Happy Death Day",
        "year": 2017,
        "rating": 6.6,
        "poster": "https://yts.gg/assets/images/movies/happy_death_day_2017/medium-cover.jpg"
      },
      {
        "id": 7713,
        "title": "Oldeuboi",
        "year": 2003,
        "rating": 8.3,
        "poster": "https://yts.gg/assets/images/movies/oldboy_2003/medium-cover.jpg"
      },
      {
        "id": 14826,
        "title": "Maleficent: Mistress of Evil",
        "year": 2019,
        "rating": 6.6,
        "poster": "https://yts.gg/assets/images/movies/maleficent_mistress_of_evil_2019/medium-cover.jpg"
      }
    ]
  }
}
```

## Streaming 

Want to build a streaming player? Do not use the `file_download` link. Instead, pass the auto-generated `magnet_url` into a frontend library like **[WebTorrent.js](https://www.npmjs.com/package/webtorrent)**. It will instantly stream the movie directly into a `<video>` tag in the browser!
