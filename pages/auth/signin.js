import Header from "../../components/Header";

import { getProviders, signIn as signInProvider } from "next-auth/react";
import Image from "next/image";
/* # [OAuth SignIn](https://next-auth.js.org/configuration/pages#oauth-sign-in):
In order to get the available authentication providers and the URLs to use for them, you can make a request to the API endpoint `/api/auth/providers`. In this case, the page we working on here is the `pages/auth/signin`.

# [getProviders](https://next-auth.js.org/getting-started/client#getproviders):
A `getProviders` method returns the list of providers currently configured for this sign in page. It calls `/api/auth/providers` and returns a list of current configured auth providers. It can be used in both CSR and SSR setups. It can be useful if you are creating a dynamic custom sign in page.

# [Callback](https://next-auth.js.org/getting-started/client#specifying-a-callbackurl)
A `callbackUrl` specifies which URL a user will be redirected after signing in. Defaults to the page URL the sign-in was initiated from. But you can specify a different `callbackUrl` by specifying it as the second argument of `signIn`. It works for all providers, example:

- `signIn(undefined, { callbackUrl: '/foo' })`
- `signIn('google', { callbackUrl: 'http://localhost:3000/bar' })`
- `signIn('email', { email, callbackUrl: 'http://localhost:3000/foo' })`

A URL must be considered valid by the redirect callback handler. By default, it requires URL to be an absolute URL, at the same host name. Or supply a relative URL starting with a slash. If it does not match, the user is redirect to the homepage. You can define your own redirect callback, to allow other URLs. */

// # Here we client-side rendered (CSR):
export default function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen -mt-56">
        <Image
          className="w-80"
          width={800}
          height={800}
          src={"/logo.png"}
          alt="logo"
        />
        <p>
          This application makes use of Google OAuth authentication services.
        </p>
        <div className="mt-20">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 font-semibold text-white transition-all bg-blue-500 rounded-lg shadow hover:scale-105"
                onClick={() =>
                  signInProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
// # Here we server-side rendered (SSR):
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
