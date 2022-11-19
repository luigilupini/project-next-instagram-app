import Image from "next/image";

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between ml-10 mt-14">
      <Image
        src="/mario.jpeg"
        alt="profile"
        width={100}
        height={100}
        className="border p-[2px] object-cover w-16 h-16 rounded-full cursor-pointer"
      />

      <div className="flex-1 mx-4">
        <h2 className="text-sm font-bold">mario</h2>
        <h3 className="text-xs text-gray-400">Ciao ragazzi to Instagram!</h3>
      </div>
      <button className="p-1 text-xs font-semibold text-blue-300 transition-all border border-blue-200 rounded-md hover:text-blue-500 hover:border-blue-300 hover:scale-105">
        Sign out
      </button>
    </div>
  );
}
