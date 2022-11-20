import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

/* # [Initialization](https://next-auth.js.org/configuration/initialization):
In Next.js, you can define an API route that will catch all requests that begin with a certain path. Conveniently, this is called "Catch all API routes". Its a `/pages/api/auth/[...nextauth].js` file that instructs NextAuth, that for every API request beginning with `/api/auth/*` its handled by the code written in the `[...nextauth]` file. This can be initialized via the simple initialization. In most cases, you won't need to worry about what NextAuth.js does, and you get by just fine with the following initialization:

```js
// /pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
export default NextAuth({
  ...
})
```

# [OAuth](https://next-auth.js.org/configuration/providers/oauth):
1) Register your application at the developer portal of the provider. There are usually links to the portals included in documentation pages for each supported provider with details on how to register your application.

2) The redirect URL is sometimes called the (callback URL), and it should follow this format: `[origin]/api/auth/callback/[provider]`

A `[provider]` refers to the id of your provider. Example, Twitter on localhost this would be: http://localhost:3000/api/auth/callback/twitter. Using Google in vercel would be: https://next-auth.vercel.app/api/auth/callback/google.

3) Create a `env` file at the project root and add the client ID and secret. For Google we making use of `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`.

4) You can add the provider settings to the `NextAuth.js` options object. You can add as many OAuth providers as you like.

5) Once a provider has been setup, sign in via URL: `[origin]/api/auth/signin`. This is an "unbranded" auto-generated page with all the configured providers.

# [Pages](https://next-auth.js.org/configuration/pages):
NextAuth.js automatically creates simple, unbranded authentication pages for handling Sign in, Sign out, Email Verification and displaying error messages.
The options displayed on the sign-up page are automatically generated based on the providers specified in the options passed to NextAuth.js. To add a custom login page, you can use the pages option.

# [Callbacks](https://next-auth.js.org/configuration/callbacks):
Callbacks are async functions you can use to control what happens when an action is performed. Callbacks are extremely powerful, especially in scenarios involving JSON Web Tokens as they allow you to implement access controls without a database and to integrate with external databases or APIs. Here we can append additional information to our session token for example. You can specify a handler for any of the callbacks below. */

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // theme: {
  //   logo: '/logo.png',
  //   brandColor: '#f13287',
  //   colorScheme: 'auto'
  // },
  pages: {
    signIn: "/auth/signin",
  },
  // Here we append additional information to the user object via the `session`
  // callback that is responsible when signing in users.
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
};
export default NextAuth(authOptions);
