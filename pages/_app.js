import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

/* # [SessionProvider](https://next-auth.js.org/getting-started/upgrade-v4#sessionprovider):
Version 4 makes using the SessionProvider mandatory. This means that you will have to wrap any part of your application using useSession in this provider, if you were not doing so already. The best practice for wrapping your app in Providers is to do so in your pages/_app.jsx file.

# Once we have a provider, we can use the `useSession` 🪝.
The useSession hook has been updated to return an object. This allows you to test states much more cleanly with the new status option. */
function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  // `session` comes from `getServerSideProps` or `getInitialProps`.
  // Avoids flickering/session loading on first load.
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
