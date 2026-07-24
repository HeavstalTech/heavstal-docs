---
title: Heavstal API Introduction
description: Welcome to Heavstal Cloud APIs - A place for all your developer needs!
sidebar:
  badge:
    text: HOT
    variant: tip
---

## What is Heavstal APIs
Heavstal API is a suite of high-performance APIs designed to empower applications of any type. From conversational AI to cryptographic security to entertainment and more, our endpoints are built for speed, reliability, and ease of use.

## Why Heavstal API over traditional scraping
Traditional web scraping is increasingly difficult and unreliable due to advanced security measures like Cloudflare and frequent website and HTML structure changes. By leveraging **Heavstal APIs**, you eliminate the burden of maintenance; we handle the complexities of data ingestion and protection, ensuring a stable, reliable data stream with a 90% guaranteed uptime

## Why Heavstal APIs over other API Providers
Heavstal Tech provides a cohesive ecosystem of APIs categorized to ensure seamless integration, meaning if you find an API your application needs in our <strong>API Playground</strong>, you're likely to find more APIs that fits your needs, and therefore instead of hitting different APIs providers, all you have to do it hit Heavstal servers that's built to handle production workloads.<br>
<br>
 Beyond this consolidated approach, Heavstal APIs offer several key advantages:<br>
 <br>
1. **Complimentary Weekly Tokens:** Every Sunday, users receive 1,000 free tokens. For applications with moderate traffic, this allocation is often sufficient to run your services entirely at no cost.
2. **Lightweight SDK Integration:** For JavaScript developers, we offer the **[@heavstal/api](https://www.npmjs.com/package/@heavstal/api)** SDK. This zero-dependency, lightweight library allows you to interact with our services efficiently without managing direct HTTP requests.
3. **Competitive Pricing:** For high-volume applications that exceed the free weekly quota, we offer flexible, cost-effective scaling. You can purchase additional capacity starting at 1,000 tokens for just ₦3,000 (approx. $3), scaling up to 100,000 tokens for ₦300,000 (approx. $300).
4. **Graceful Rate-Limiting:** To ensure service continuity, we implement a buffer system. Before enforcing strict rate limits, Heavstal allows for a grace period of 10 additional requests and triggers a notification email, providing you the opportunity to upgrade your plan and avoid service interruptions.

## Getting Started
When setting up Heavstal APIs, just like many other API Providers, you'll need an **API key**.
Heavstal APIs also provide an SDK for easy integration into your application.

### Step 1: Getting your API Key
All API requests require an **API Key**. You can generate one by following the steps below:
<br>
1. Visit [Heavstal API Key Manager](https://heavstal.com.ng/credentials)
2. Click on the blue <strong>Generate Secret Key</strong>
3. Copy the generated Key
And that's all it takes, as simple as it gets.

### Step 2: Testing your API Key
To eliminate the guesswork on how a success response will look like, you can test out your API key in our <strong>[API Playground](https://heavstal.com.ng/apis)</strong> and see response type, therefore solving two problems with one action.


## Code and Examples

### Base URL
All endpoints live under:
```text
https://heavstal.com.ng/api/v1
```
By passing the `x-api-key` in the header, you can make an API request to Heavstal APIs.
In cases of the SDK you can pass a config to it, See Heavstal API SDK Documentation [HERE](https://docs.heavstal.com.ng/modules/api/).

### Example Using Bash
```bash
curl -X POST https://heavstal.com.ng/api/v1/ai \
-H "Content-Type: application/json" \
-H "x-api-key: ht_live_xxxxxxxxxxxxxxxx" \
-d '{"prompt": "Hello"}'
```

### Example Using JavaScript
```javascript
const response = await fetch('https://heavstal.com.ng/api/v1/ai', {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY'
},
body: JSON.stringify({
  prompt: "Explain quantum physics like I'm 5",
  persona: "You're a 21 century Quantum physicist"
})
})
const res = await response.json()
console.log(res.data)
```

### Example Using python
```python
import requests
url = "https://heavstal.com.ng/api/v1/ai"
headers = {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY"
}
payload = {
    "prompt": "Explain quantum physics like I'm 5",
    "persona": "You're a 21st century Quantum physicist"
}
response = requests.post(url, headers=headers, json=payload)
res = response.json()
print(res["data"])
```

### Typical Success Response
```json
{
"status": "success",
"creator": "Heavstal Tech",
"data": { ... }
}
```

### Typical Error Response
```json
{
"status": "error",
"error": "...",
}
```

For proper understanding of an API and it's responses, visit it's documentation.

## Frequently Asked Questions (FAQ)
<details> 
 <summary><b>What happens if my API Key gets accidentally exposed?</b></summary>
 <br>
 If your are API key is exposed, Heavstal automatically helps minimize the impact through secret scanning and credential revocation. If this occurs, the affected Keys are automatically revocade and you'll be notified via email so you can generate a new key.
 </details>
 <br>
 <details> 
 <summary><b>How do I manually rotate my API Key?</b></summary>
 <br>
 To rotate your API key manually, follow the steps below:<br>
 <ul>
 <li> Visit <strong><a href="https://heavstal.com.ng/credentials">Heavstal API Manager</a></strong>
 <li> At the button right of the page, click on the white <strong>Roll Key</strong> button 
 <li> You'll be asked to confirm if wether or not you want to rotate the key. <strong>Note:</strong>This will invalidate your current key immediately. Any apps using it will stop working until you update them with the new key.
 </ul>
 </details>
 <br>
  <details> 
 <summary><b>How do I manually revoke my API Key?</b></summary>
 <br>
  To rovoke your API key manually, follow the steps below:<br>
 <ul>
 <li> Visit <strong><a href="https://heavstal.com.ng/credentials">Heavstal API Manager</a></strong>
 <li> At the button right of the page, click on the red <strong>Revoke Key</strong> button 
 <li> You'll be asked to confirm if wether or not you want to revoke the key. <strong>Note:</strong>This will delete your key. You will lose access to all APIs until you generate a new one.
 </ul>
 </details>
 <br>
 <details>
  <summary><b>What happens when I hit my rate-limit?</b></summary>
 <br>
 Rate limits are monitored closely, and users receive multiple notifications as they approach their quota. Should you exceed your limit, you will receive an email warning detailing a 20-request grace period. Please note that failure to address '429 Too Many Requests' errors during this period will result in the permanent revocation of your API key
 </details>
 
 ## API POLICY
**Developer Fair Use API Policy:**<br>
This policy governs fair and responsible usage of all Heavstal APIs<br>

1. **Rate Limits**<br>
Free-tier users are restricted to moderate request volume of 1,000 request per week.<br>
<br>
2. <strong>Prohibited Usage</strong><br>
The following are strictly prohibited by Heavstal Tech
<ul className="list-disc pl-5 space-y-2">
<li>DDoS attacks or scraping</li>
<li>Account farming</li>
<li>Token sharing</li>
<li>Unauthorized resale</li>
</ul>

**Violations of this policies may lead to API Key termination without notice.**<br>
For further information, check our our **[API POLICY](https://heavstal.com.ng/api-policy)**
