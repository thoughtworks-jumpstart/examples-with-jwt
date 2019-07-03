# Examples with JWT

In this example project we explore ways we can send a token to the client.

## Getting started

Install all dependencies

```
npm install
```

Start the server

```
npm run start
```

## Sending tokens via response body

Visit the route `/send/token/1` using an API client like Insomnia or Postman.

In this example, we sign a `jwt` token and send it to the client in the response body.

Now go to `receive/token/1` to give the token back to the server. You will need to add the token in the Bearer Token in your request headers.

## Send tokens via cookies

Visit the route `/send/token/2` using an API client like Insomnia or Postman.

In this example, we sign a `jwt` token and send it to the client in the cookies.

Now go to `receive/token/2`. Note that you don't have to do any additional steps. The cookies are sent automatically in your request.
