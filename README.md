This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone repo and install dependencies inside the cloned folder:

```bash
npm i
```
***
## Configure

Create an account in [DummyApi](https://dummyapi.io/), then generate one app to get `app-id` header (we uses this later)

To login, create credentials in google console to get `client_id` and `client_secret`
- Don't forget to assign `Redirect URIs` to `{APP_URL}/api/auth/callback/google`


After that, create a `.env.local` file with:
```env
NEXT_PUBLIC_API_URL=https://dummyapi.io/data/v1
NEXT_PUBLIC_APP_ID={APP_ID}

GOOGLE_CLIENT_ID={CLIENT_ID}
GOOGLE_CLIENT_SECRET={CLIENT_SECRET}

NEXTAUTH_URL={APP_URL}
```
Replace `{VARIABLE}` where needed

***

## Run blog app

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes
The path `'/'` is protected with Auth using `NextAuth.js`

The path `'/blog'` is free to check if you have problems with `SignIn` using google.


:rocket: :rocket:

:smile: