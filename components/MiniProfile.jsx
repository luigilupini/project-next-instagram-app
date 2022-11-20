import Image from "next/image";

import { signOut, useSession } from "next-auth/react";

export default function MiniProfile() {
  const { data: session } = useSession();
  console.log(session); // [...nextauth].js `callback` has enhanced our session.
  return (
    <div className="flex items-center justify-between ml-10 mt-14">
      <Image
        src={session?.user?.image}
        alt="profile"
        width={100}
        height={100}
        className="border p-[2px] object-cover w-16 h-16 rounded-full cursor-pointer"
      />

      <div className="flex-1 mx-4">
        <h2 className="text-sm font-bold">{session?.user?.name}</h2>
        <h3 className="text-xs text-gray-400">Ciao ragazzi to Instagram!</h3>
      </div>
      <button
        className="p-1 text-[11px] font-semibold text-gray-400 transition-all rounded-md hover:text-blue-500 hover:scale-105"
        onClick={signOut}
      >
        Sign out
      </button>
    </div>
  );
}
