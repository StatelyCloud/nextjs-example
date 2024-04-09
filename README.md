# Next.js and Stately Cloud Example

This example shows how you can use `@stately-cloud/data` to easily add persistence to your Next.js application. The example includes the following:

- Authentication
- Reading items from a store
- Writing items to a store
- Deleting items from a store

**Important Note**: StatelyDB is not currently designed for use directly from the browser, so this example intends to execute its actions from the server using NextJS Server Actions.

## Configuring Stately

1. Go to the [Stately Console](https://console.stately.cloud) and create an account
2. Contact support and ask for API access
   1. You will be given a Client ID, Client Secret and Store ID


### Set up environment variables

To connect the app with Stately Cloud, you'll need to add the following environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then, open `.env.local` and add the missing environment variables:

- `STATELY_CLIENT_ID` - Given to you by Stately support.
- `STATELY_CLIENT_SECRET` - Given to you by Stately support.
- `STATELY_STORE_ID` - Given to you by Stately support.


## Run locally

Simply run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
