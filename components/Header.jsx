import Image from "next/image";
import { useRouter } from "next/router";

import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

/* # [signIn](https://next-auth.js.org/getting-started/client#signin):
- Client Side: Yes / Server Side: No
Using the `signIn` method ensures the user ends back on the page they started on after completing a sign in flow that being our `pages/api/auth/signin`. It will also handle CSRF Tokens for you automatically when signing in with email. The `signIn` method can be called from the client in different ways. For more information, please see documentation.

# [signOut](https://next-auth.js.org/getting-started/client#signout):
- Client Side: Yes / Server Side: No
In order to logout, use `signOut` method to ensure the user ends back on the page they started on after completing the sign out flow. It also handles CSRF tokens for you auto. It reloads the page in the browser when complete. */
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-md">
      {/* Our max-width container wrapper: */}
      <div className="flex items-center justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left (Logo) */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden h-10 cursor-pointer w-28 lg:inline-grid"
        >
          <Image src="/logo.png" alt="" fill className="object-contain" />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative flex-shrink-0 w-10 h-10 cursor-pointer lg:hidden"
        >
          <Image src="/m-logo.png" alt="" fill className="object-contain" />
        </div>

        {/* Middle (Search/Input) */}
        <div className="max-w-xs">
          <div className="relative p-3 mt-1">
            <div className="absolute top-0 bottom-0 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              className="block w-full pl-10 border-gray-300 rounded-md sm:text-sm bg-gray-50 focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right  */}
        <div className="flex items-center justify-end gap-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <Bars3Icon className="w-6 h-6 cursor-pointer md:hidden" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="-rotate-45 navBtn" />
                <div className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-1">
                  3
                </div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              {/* Profile */}
              <Image
                onClick={signOut}
                // src="/mario.jpeg"
                src={session.user.image}
                alt="profile"
                width={100}
                height={100}
                className="object-cover w-10 h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <div>
              <button onClick={signIn}>Sign In</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
