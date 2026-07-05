---
title: "OAuth 2.0 & OpenID Connect (OIDC) Guide"
description: "Integrate 'Sign in with Heavstal' into your applications using standard OAuth 2.0 or OpenID Connect (OIDC). Full Documentation."
sidebar:
  badge:
    text: HOT
    variant: tip
---

## What is Heavstal Authentication
Heavstal Auth (short for Heavstal Tech Authentication) is Africa's first OAuth 2.0 and OpenID Connect platform that lets users prove their identity using their Heavstal account, allowing them to sign in to apps, websites, or services without creating a separate username and password for each one significantly reducing authentication friction.

## Why Heavstal Authentication over traditional Authentication methods
Using Heavstal Auth over traditional Authentication methods (email+password) provides both users and developers with major advantages including:

### User Benefits:
1. **Password-Free Sign-In:** Users can access multiple applications across the web with a single click without having to create, memorize, or constantly reset new passwords for every website they visit.
2. **Privacy by Design:** Instead of trusting dozens of third-party websites with their sensitive passwords, users authenticate through one highly secure, centralized platform. They maintain full control over which apps have access to their profile data.
3. **Enhanced Support:** Heavstal Tech provides enhanced support for users, ensuring fast responses whenever issues arise.
4. **Strong Account Security:** With mandatory multi-factor authentication (2FA) and modern account protection protocols, users enjoy a higher level of security compared to standard email and password combinations.

### Developer Benefits:
1. **Reduced Authentication Burden:** Developers no longer need to worry about securely hashing passwords, managing password resets, email verification, protecting against credential stuffing attacks or scraping. Heavstal Auth handles the heavy lifting of user security seamlessly.
2. **Higher Sign-Up Conversion Rates:** By offering a frictionless, one-click sign-in experience, applications see significantly lower drop-off rates during user registration and log in flows, leading to faster user acquisition.
3. **Seamless Identity Management:** Developers can focus on building core application features while relying on Heavstal’s robust, high-uptime, and secure authentication service to handle user identity verification and profile mapping.
4. **Reduced Integration Overhead:** By leveraging standard OAuth2 and OIDC protocols along with a dedicated SDK, developers can quickly implement secure authentication without building complex identity infrastructure from scratch.

## Why Heavstal Authentication over other auth provider 
Heavstal Auth reduces account compromise risks through mandatory multi-factor authentication and modern account protection mechanisms. Furthermore, Heavstal Auth is designed for low-latency authentication flows, reliable uptime and more importantly it's the first African-built OAuth provider giving African developers a major advantage. The platform also benefits from enterprise-grade edge protection and DDoS mitigation through Cloudflare's global network.

<!-- ## Rate Limits
Coming Soon...
Temporarily unavailable, This will be documented in details later on. -->

## Getting Started.
When setting up Heavstal Auth, just like any other OAuth P
provider, you'll need to get a `Client ID & Client Secret`. Heavstal Auth also provides an SDK for simple integration into your applications.

### Step 1: How To Get Your Client ID & Secret:
1. Visit [Heavstal Auth Manager](https://heavstal.com.ng/oauth/apps)
2. Click rhe bold blue button with text "Create App" or click the blue text that says "Register Application"
3. Enter your application details In the required fields (Application Type, App Name, Homepage URL, Authorized JavaScript Origins, & Authorized JavaScript URIs)
4. Click on "Register Application"
5. A pop-up window will appear containing your Client ID and Client Secret with options to copy or download details. 
**Note 1:** it is recommended to download these details as it will *NEVER* be shown to you again.
**Note 2:** Never expose your Client Secret in frontend code. It must only be used on trusted backend servers.
**Note 3:** it is recommended to use Desktop Site for best developer experience and to ensure a more accurate positioning of the instructions above.


## Code & Examples
As said earlier under the `Getting Started` section, Heavstal Auth has a custom SDK to help developers with easier integration of Heavstal Auth into their application and this SDK is available on npm as _[@heavstal/auth](https://www.npmjs.com/package/@heavstal/auth)_. Below are several methods by which you can integrate Heavstal Auth into your application:

### Integrating Heavstal Authentication Using Next.js
This is the easiest way to add Heavstal Auth to your Next.js application. This official provider pre-configures authorization endpoints, token exchanges, and user profile mapping securely. Ensure that Next.js is installed before using this provider.

**Installation:**

```bash
npm install @heavstal/auth next-auth
# or
yarn add @heavstal/auth next-auth
# or
pnpm add @heavstal/auth next-auth
```

**Configuration (`auth.ts` or `app/api/auth/[...nextauth]/route.ts`)**
The Heavstal Auth library uses "OpenID Connect (OIDC)" by default, meaning its default mode is "oidc".

```typescript
// OIDC Mode 
import NextAuth from "next-auth";
import HeavstalProvider from "@heavstal/auth";

export const authOptions = {
  providers:[
    HeavstalProvider({
      clientId: process.env.HEAVSTAL_CLIENT_ID!,
      clientSecret: process.env.HEAVSTAL_CLIENT_SECRET!,
    })
  ]
};

// OAuth 2.0 Mode
HeavstalProvider({
  clientId: process.env.HEAVSTAL_CLIENT_ID!,
  clientSecret: process.env.HEAVSTAL_CLIENT_SECRET!,
  mode: "oauth2", // Mode was added here
})
```
The difference between OIDC and OAuth2 here is that OAuth2 may be preferable in strict edge-runtime environments where JWKS retrieval or JWT verification introduces additional complexity.

### Integrating Heavstal Authentication Using Other Frameworks
For other frameworks like Vue.js, Express.js or Node.js, you do not need to manually configure endpoints. Heavstal Auth operates as an OpenID Connect (OIDC) compliant provider. Simply provide the Issuer URL to any openId library and the library will automatically handle endpoint discovery and configuration.

```javascript
const { Issuer } = require('openid-client');

async function main() {
  // Auto-discover endpoints using the Issuer URL
  const heavstal = await Issuer.discover('https://accounts.heavstal.com.ng');
  const client = new heavstal.Client({
    client_id: process.env.HEAVSTAL_CLIENT_ID,
    client_secret: process.env.HEAVSTAL_CLIENT_SECRET,
    redirect_uris: ['http://your-app.com/api/auth/callback/heavstal'],
    response_types: ['code']
  });
}
```
### Integrating Heavstal Authentication Using OIDC
If you decide to use Heavstal Auth OIDC directly, you can use the following parameters for integration.

| Parameter              | Value                                                               |
| :--------------------- | :------------------------------------------------------------------ |
| **Issuer URL**         | `https://accounts.heavstal.com.ng`                                  |
| **Discovery Document** | `https://accounts.heavstal.com.ng/.well-known/openid-configuration` |
| **JWKS Endpoint**      | `https://accounts.heavstal.com.ng/.well-known/jwks.json`            |

### Integrating Heavstal Authentication Using Other Languages 
Yes, you can use Heavstal Auth with other languages, it is not limited to only JavaScript and its frameworks, as long as the language supports backend execution, it can be used to communicate with Heavstal Auth.

**Example (Python):**
```python
from authlib.integrations.flask_client import OAuth
import os

oauth = OAuth(app)
# Auto-discovery via server_metadata_url
oauth.register(
    name='heavstal',
    server_metadata_url='https://accounts.heavstal.com.ng/.well-known/openid-configuration',
    client_id=os.getenv('HEAVSTAL_CLIENT_ID'),
    client_secret=os.getenv('HEAVSTAL_CLIENT_SECRET'),
    client_kwargs={'scope': 'openid profile email'}
)
```

## User Profile Data
On successful authentication, Heavstal Auth provides your application with user details such as `Name, ID, Email, & Profile photo`. Heavstal Auth returns the following normalized user profile structure:
```typescript
interface HeavstalProfile {
  id: string;       // The unique Heavstal User ID
  name: string;     // Full display name
  email: string;    // Verified Email Address
  image: string;    // Profile Picture URL
}
```

## Real Time Usage Example 
The following example demonstrates what developers can do next after integrating the basic set-up. The example uses the provider's stable user identifier to either create a new user account or log in an existing account, it uses Redis as the database, It demonstrates sign-in handling, JWT persistence, session management, and user creation using OAuth2 mode.

```javascript
// auth.js
import NextAuth from "next-auth";
import HeavstalProvider from "@heavstal/auth";
import { kv } from "@vercel/kv";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    HeavstalProvider({
      clientId: process.env.HEAVSTAL_CLIENT_ID,
      clientSecret: process.env.HEAVSTAL_CLIENT_SECRET,
      mode: "oauth2", // Remove this option to use OIDC (default).
    }),
  ],
  secret: process.env.AUTH_SECRET, // optional but recommended for production
  trustHost: true,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: { // create or log in a user
    async signIn({ user, profile }) {
      const stableId = profile?.sub
      if (!stableId) return true;
      const userKey = `user:${stableId}`;
      await kv.hset(userKey, { // store in DB
        id: stableId,
        name: user.name,
        email: user.email,
        image: user.image,
      })
      return true
    },

    async jwt({ token, user, profile }) { // Store the user's ID in JWT so it can be accessible throughout your application 
      if (user || profile) {
        token.id = profile?.sub
        token.picture =user?.image || profile?.picture || profile?.image
      }
      return token
    },

    /**
     * Expose the user identifier on the session object.
     * Useful for authorization, database lookups,
     * and session validation.
     */
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id || token.sub;
        if (token.picture) {
          session.user.image = token.picture;
        }      }

      return session
    },
  },
})
```

## Frequently Asked Questions (FAQ)
<details> 
 <summary><b>What happens if my client credentials are accidentally exposed?</b></summary>
<!-- Several things can happen is your Heavstal Auth credentials Happens to gets leaked:
**Secret Scanning:** Heavstal Tech works hand in hand with secret Scanning service meaning if your credentials (API key, Heavstal Auth Secret) happens to get leaked, our service will be notified and that credential will automatically be rovoked and rotated and you will receive an email from us informing you about the incident. -->
If your client credentials are exposed, Heavstal automatically helps minimize the impact through secret scanning and credential revocation. You will be Notified Incase of these situations.
</details>

<details> 
 <summary><b>How can I rotate my heavstal auth credentials</b> </summary>
  You can rotate your Heavstal Auth Credentials in Heavstal Console by following the methods below:<br>
  1. Visit [Heavstal Auth Manager](https://heavstal.com.ng/oauth/apps)<br>
  2. From the application list, find the app whose credentials you want to rotate and at the end of that app select the kebab menu and from the list select <strong>"Configure"</strong> with Settings icon<br>
  3. From the configuration settings, you'll see a section named <strong>"OAuth Credentials"</strong> containing your client id and masked client secret marked as <strong>"Enabled"</strong><br>
  4. At the top right of the OAuth Credentials section you will see a button "+ Add Secret", click this button to create a new client secret <br>
  5. A message modal will appear with your new secret, you're to copy it and replace with the old version in your app<br>
  6. Importantly after successfully migrating to the new client secret, you must return to the application configuration in Heavstal Authentication Manger and click, from the two available client secrets, find old one (you can easily identify it via the date provided) that's usually at the bottom, and click on the blue "Enabled" tag at the end of the secret to disable the Old Client secret and optional delete it<br>
  <strong>Note 1:</strong> Please ensure you've updated your old client secret to the new client secret before disabling the the old client secret. <br>
  <strong>Note 2:</strong> Never expose your Client Secret in frontend code. It must only be used on trusted backend servers.<br>
  <strong>Note 3:</strong> Please use the Desktop Site option provided at the sidebar for best developer experience.
</details>
