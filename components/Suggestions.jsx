import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Image from "next/image";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      name: faker.name.firstName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      company: faker.company.name(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
  }, []);
  // console.log(suggestions);
  return (
    <div className="mt-4 ml-10">
      <div className="flex items-center justify-between mb-5 text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600 cursor-pointer">
          See all
        </button>
      </div>
      {suggestions.map((profile) => (
        <div
          className="flex items-center justify-between p-1 mt-3"
          key={profile.userId}
        >
          <Image
            src={profile.avatar}
            alt="profile"
            width={100}
            height={100}
            className="border p-[2px] object-cover w-10 h-10 rounded-full cursor-pointer"
          />
          <div className="flex-1 ml-4">
            <h2 className="text-xs font-semibold">{profile.name}</h2>
            <h3 className="text-[11px] truncate w-11/12 text-gray-400">
              Works at {profile.company}
            </h3>
          </div>
          <button className="text-[11px] font-semibold text-gray-400 transition-all rounded-md hover:text-blue-500 hover:scale-105">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
