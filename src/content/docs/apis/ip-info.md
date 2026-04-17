---
title: "IP Geo-Locator"
description: "Get location, ISP, and timezone info for any IP address or domain."
---

# Overview
      
      **Heavstal IP Engine** provides detailed intelligence on IP addresses and domain names. It reveals the physical location (Country, City), the Internet Service Provider (ISP), and network details.

      ## Endpoint
      `POST /ip-info`

      ## Request Parameters
      | Field | Type | Required | Description |
      |---|---|---|---|
      | ip | string | Yes | The IP address (IPv4/IPv6) or Domain Name to look up. |

      ## Example Usage
      ```javascript
      const res = await fetch('https://heavstal-tech.vercel.app/api/v1/ip-info', {
        method: 'POST',
        headers: { 'x-api-key': 'YOUR_KEY' },
        body: JSON.stringify({ ip: '8.8.8.8' })
      });
      ```

      ### Successful Response
      ```json
      {
        "status": "success",
        "creator": "HEAVSTAL TECH",
        "data": {
          "ip": "8.8.8.8",
          "city": "Mountain View",
          "region": "California",
          "country": "US",
          "org": "Google LLC",
          "timezone": "America/Los_Angeles",
          "map": "https://www.google.com/maps?q=37.4223,-122.085"
        }
      }
      ```
