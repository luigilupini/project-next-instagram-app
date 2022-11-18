import { useEffect, useState } from "react";
import Image from "next/image";

/* Generated data from faker.js:
```js 
const emptyArray = [...Array(20)]; // [ undefined, undefined ... ]
 Map over empty array of 20 elements and spread data from faker.js:
 const generateData = emptyArray.map((_, i) => {
   return {
     id: i,
     ...faker.helpers.contextualCard(), // [ {...} ] (x20 times)
   };
 });
``` */
const dummyProfiles = [
  {
    id: 0,
    name: "Kiley",
    username: "Kiley75",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/130.jpg",
    email: "Kiley75_Farrell@gmail.com",
    dob: "1962-05-15T04:18:24.545Z",
    phone: "403.300.3503",
    address: {
      street: "Amira Trace",
      suite: "Apt. 139",
      city: "Jeremyville",
      zipcode: "66376-0037",
      geo: {
        lat: "-63.2051",
        lng: "-81.4897",
      },
    },
    website: "candace.org",
    company: {
      name: "Swift LLC",
      catchPhrase: "Assimilated context-sensitive open system",
      bs: "architect 24/365 platforms",
    },
  },
  {
    id: 1,
    name: "Reymundo",
    username: "Reymundo84",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/417.jpg",
    email: "Reymundo8477@gmail.com",
    dob: "1961-05-27T08:04:04.161Z",
    phone: "248.559.4100",
    address: {
      street: "Rempel Trail",
      suite: "Suite 439",
      city: "South Freda",
      zipcode: "32285",
      geo: {
        lat: "72.8224",
        lng: "-18.3849",
      },
    },
    website: "misael.name",
    company: {
      name: "Goldner, O'Hara and Baumbach",
      catchPhrase: "Cross-group exuding function",
      bs: "incentivize synergistic infrastructures",
    },
  },
  {
    id: 2,
    name: "Zachariah",
    username: "Zachariah15",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg",
    email: "Zachariah15_Pfeffer@gmail.com",
    dob: "1960-10-03T08:25:48.579Z",
    phone: "(295) 958-1978 x7050",
    address: {
      street: "Nella Rue",
      suite: "Apt. 768",
      city: "Dale City",
      zipcode: "68959-1413",
      geo: {
        lat: "61.6052",
        lng: "-33.0523",
      },
    },
    website: "princess.info",
    company: {
      name: "West Group",
      catchPhrase: "Versatile web-enabled customer loyalty",
      bs: "maximize cutting-edge metrics",
    },
  },
  {
    id: 3,
    name: "Gerardo",
    username: "Gerardo_Collins32",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/129.jpg",
    email: "Gerardo_Collins32_West@gmail.com",
    dob: "1966-11-26T06:53:05.164Z",
    phone: "927-321-4094 x33145",
    address: {
      street: "Annalise Via",
      suite: "Suite 138",
      city: "West Maci",
      zipcode: "93401",
      geo: {
        lat: "18.9661",
        lng: "-171.2168",
      },
    },
    website: "brown.com",
    company: {
      name: "Kuhn Inc",
      catchPhrase: "Up-sized zero defect solution",
      bs: "synergize synergistic markets",
    },
  },
  {
    id: 4,
    name: "Hazle",
    username: "Hazle.Kirlin",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1200.jpg",
    email: "Hazle.Kirlin.Barrows57@hotmail.com",
    dob: "1959-12-16T17:57:47.197Z",
    phone: "(348) 497-9671 x4987",
    address: {
      street: "Osborne Station",
      suite: "Apt. 962",
      city: "Lake Maxieview",
      zipcode: "53348-9790",
      geo: {
        lat: "-60.7473",
        lng: "57.2374",
      },
    },
    website: "lorna.name",
    company: {
      name: "Toy and Sons",
      catchPhrase: "Innovative logistical parallelism",
      bs: "benchmark impactful networks",
    },
  },
  {
    id: 5,
    name: "Bernardo",
    username: "Bernardo_Hoeger",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/500.jpg",
    email: "Bernardo_Hoeger_Kuhn83@yahoo.com",
    dob: "1982-08-11T20:21:33.636Z",
    phone: "1-905-431-3552",
    address: {
      street: "Ruecker Rue",
      suite: "Suite 189",
      city: "East Vivien",
      zipcode: "16713-7338",
      geo: {
        lat: "-34.4509",
        lng: "42.4743",
      },
    },
    website: "liana.net",
    company: {
      name: "Halvorson Inc",
      catchPhrase: "Up-sized analyzing product",
      bs: "whiteboard dynamic interfaces",
    },
  },
  {
    id: 6,
    name: "Carole",
    username: "Carole.Nienow",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/597.jpg",
    email: "Carole.Nienow61@gmail.com",
    dob: "1987-02-12T12:33:43.723Z",
    phone: "735-518-6547 x1182",
    address: {
      street: "Schaden Freeway",
      suite: "Apt. 848",
      city: "Lakinland",
      zipcode: "97946",
      geo: {
        lat: "-34.0164",
        lng: "179.3477",
      },
    },
    website: "ethelyn.name",
    company: {
      name: "Heathcote, Hoppe and Osinski",
      catchPhrase: "Total local encoding",
      bs: "extend 24/7 action-items",
    },
  },
  {
    id: 7,
    name: "Brionna",
    username: "Brionna_Fay54",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1088.jpg",
    email: "Brionna_Fay5453@yahoo.com",
    dob: "1974-03-07T19:07:20.362Z",
    phone: "584-915-4209 x37686",
    address: {
      street: "Kayla Gardens",
      suite: "Suite 932",
      city: "East Ardithhaven",
      zipcode: "90511-1431",
      geo: {
        lat: "19.2848",
        lng: "-123.2842",
      },
    },
    website: "maia.biz",
    company: {
      name: "Ortiz, Batz and Koelpin",
      catchPhrase: "Seamless scalable infrastructure",
      bs: "streamline sticky methodologies",
    },
  },
  {
    id: 8,
    name: "Cecelia",
    username: "Cecelia.Huels48",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg",
    email: "Cecelia.Huels48.Kuhic@hotmail.com",
    dob: "1974-07-30T07:00:02.239Z",
    phone: "930.465.1832",
    address: {
      street: "McClure Fields",
      suite: "Apt. 983",
      city: "Port Kendra",
      zipcode: "26474-9822",
      geo: {
        lat: "-43.0305",
        lng: "124.4755",
      },
    },
    website: "cesar.org",
    company: {
      name: "Hamill LLC",
      catchPhrase: "User-friendly actuating encryption",
      bs: "seize open-source paradigms",
    },
  },
  {
    id: 9,
    name: "Kassandra",
    username: "Kassandra.Hansen",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/577.jpg",
    email: "Kassandra.Hansen34@gmail.com",
    dob: "1946-01-02T12:04:20.895Z",
    phone: "(498) 456-2875",
    address: {
      street: "Ambrose Shoal",
      suite: "Suite 854",
      city: "Port Sammie",
      zipcode: "49180",
      geo: {
        lat: "-62.8473",
        lng: "176.5036",
      },
    },
    website: "alessia.info",
    company: {
      name: "Armstrong LLC",
      catchPhrase: "Reactive encompassing migration",
      bs: "envisioneer distributed e-markets",
    },
  },
  {
    id: 10,
    name: "Margie",
    username: "Margie_Reichert5",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1121.jpg",
    email: "Margie_Reichert5.Botsford@yahoo.com",
    dob: "1945-07-04T21:42:56.697Z",
    phone: "580-685-9819",
    address: {
      street: "Ines Locks",
      suite: "Suite 843",
      city: "East Elfriedashire",
      zipcode: "29363-1948",
      geo: {
        lat: "-44.6279",
        lng: "84.8636",
      },
    },
    website: "alvina.info",
    company: {
      name: "Spinka - Greenfelder",
      catchPhrase: "Focused global contingency",
      bs: "synthesize strategic experiences",
    },
  },
  {
    id: 11,
    name: "Jerry",
    username: "Jerry_OKon81",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/579.jpg",
    email: "Jerry_OKon8163@gmail.com",
    dob: "1983-02-12T00:50:50.912Z",
    phone: "1-477-551-2816",
    address: {
      street: "Dusty Harbors",
      suite: "Suite 140",
      city: "DuBuquetown",
      zipcode: "46903",
      geo: {
        lat: "-83.1393",
        lng: "-34.0040",
      },
    },
    website: "myrna.net",
    company: {
      name: "Romaguera and Sons",
      catchPhrase: "Synergistic coherent emulation",
      bs: "synthesize compelling blockchains",
    },
  },
  {
    id: 12,
    name: "Jayda",
    username: "Jayda.Turcotte",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1102.jpg",
    email: "Jayda.Turcotte80@gmail.com",
    dob: "1948-11-01T13:27:06.728Z",
    phone: "728-569-8165 x371",
    address: {
      street: "Kreiger Port",
      suite: "Apt. 799",
      city: "Lavinashire",
      zipcode: "77693",
      geo: {
        lat: "-88.0626",
        lng: "61.6762",
      },
    },
    website: "chelsey.biz",
    company: {
      name: "Witting LLC",
      catchPhrase: "Balanced 24/7 budgetary management",
      bs: "aggregate B2C partnerships",
    },
  },
  {
    id: 13,
    name: "Dina",
    username: "Dina11",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1073.jpg",
    email: "Dina11_Lindgren42@yahoo.com",
    dob: "1968-05-13T16:10:52.177Z",
    phone: "(646) 566-5999 x485",
    address: {
      street: "Wehner Knoll",
      suite: "Suite 504",
      city: "Chaddland",
      zipcode: "18884",
      geo: {
        lat: "-70.1935",
        lng: "-54.8236",
      },
    },
    website: "christy.name",
    company: {
      name: "Friesen, Ledner and Kassulke",
      catchPhrase: "Cross-platform transitional definition",
      bs: "incentivize open-source communities",
    },
  },
  {
    id: 14,
    name: "Emelia",
    username: "Emelia.Stanton86",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1230.jpg",
    email: "Emelia.Stanton86_Orn63@hotmail.com",
    dob: "1988-03-28T09:39:31.497Z",
    phone: "849-987-3938 x21799",
    address: {
      street: "Wellington Mission",
      suite: "Apt. 854",
      city: "Omahaven",
      zipcode: "26333-3473",
      geo: {
        lat: "-8.1571",
        lng: "-18.9227",
      },
    },
    website: "francesco.info",
    company: {
      name: "Nienow, Schiller and Gerlach",
      catchPhrase: "Compatible secondary task-force",
      bs: "streamline web-enabled users",
    },
  },
  {
    id: 15,
    name: "Elouise",
    username: "Elouise12",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/942.jpg",
    email: "Elouise1262@yahoo.com",
    dob: "1972-04-29T19:23:57.197Z",
    phone: "525-426-0224 x1220",
    address: {
      street: "Onie Island",
      suite: "Apt. 104",
      city: "Avondale",
      zipcode: "88954-1166",
      geo: {
        lat: "36.9097",
        lng: "-27.6270",
      },
    },
    website: "crawford.com",
    company: {
      name: "Jerde, Leannon and Klein",
      catchPhrase: "Stand-alone multimedia orchestration",
      bs: "matrix end-to-end communities",
    },
  },
  {
    id: 16,
    name: "Vicente",
    username: "Vicente_Swift",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
    email: "Vicente_Swift_Goodwin@hotmail.com",
    dob: "1949-03-11T19:29:47.979Z",
    phone: "405-933-5413 x06854",
    address: {
      street: "Emmerich Lodge",
      suite: "Suite 434",
      city: "North June",
      zipcode: "53916-2425",
      geo: {
        lat: "78.5728",
        lng: "96.0835",
      },
    },
    website: "bradford.org",
    company: {
      name: "Hickle - Walter",
      catchPhrase: "Innovative contextually-based synergy",
      bs: "facilitate cross-media convergence",
    },
  },
  {
    id: 17,
    name: "Christop",
    username: "Christop93",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/811.jpg",
    email: "Christop93.Trantow35@gmail.com",
    dob: "1969-06-19T21:07:22.835Z",
    phone: "1-654-598-5403 x13706",
    address: {
      street: "Will Prairie",
      suite: "Apt. 238",
      city: "Berkeley",
      zipcode: "42074",
      geo: {
        lat: "-70.5909",
        lng: "-109.5895",
      },
    },
    website: "dominic.com",
    company: {
      name: "Crona - Torphy",
      catchPhrase: "Up-sized solution-oriented database",
      bs: "unleash value-added metrics",
    },
  },
  {
    id: 18,
    name: "Daren",
    username: "Daren55",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1237.jpg",
    email: "Daren55_Mertz4@yahoo.com",
    dob: "1972-03-19T08:24:08.984Z",
    phone: "(921) 847-9559 x002",
    address: {
      street: "Paolo Springs",
      suite: "Apt. 842",
      city: "Hoytshire",
      zipcode: "08779",
      geo: {
        lat: "25.0469",
        lng: "-50.7049",
      },
    },
    website: "haley.info",
    company: {
      name: "Bartoletti - O'Kon",
      catchPhrase: "Reverse-engineered systemic adapter",
      bs: "orchestrate magnetic solutions",
    },
  },
  {
    id: 19,
    name: "Andrew",
    username: "Andrew_Legros",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1221.jpg",
    email: "Andrew_Legros95@hotmail.com",
    dob: "1964-08-27T20:27:00.913Z",
    phone: "941-223-5095 x748",
    address: {
      street: "Marvin Fort",
      suite: "Suite 502",
      city: "North Richard",
      zipcode: "26355-4523",
      geo: {
        lat: "59.5714",
        lng: "50.8496",
      },
    },
    website: "zoe.biz",
    company: {
      name: "Weissnat - Blick",
      catchPhrase: "Multi-channelled static adapter",
      bs: "embrace out-of-the-box eyeballs",
    },
  },
];

function Story({ name, avatar }) {
  return (
    <div className="">
      <Image
        src={avatar}
        alt="profile"
        width={100}
        height={100}
        className="object-contain rounded-full w-14 h-14 p-[1.5px] border-red-400 border-2 hover:scale-110 transition transform duration-200 ease-out"
      />
      <p className="text-[11px] text-center truncate w-14">{name}</p>
    </div>
  );
}

export default function Stories() {
  // console.log(faker.image.avatar());
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    setProfiles(dummyProfiles);
  }, []);

  if (!profiles) return <h1>Loading...</h1>;
  return (
    <div className="flex gap-2 p-6 mt-8 overflow-x-scroll bg-white border border-gray-200 rounded-sm scrollbar-thin scrollbar-thumb-slate-600">
      {profiles.map(({ id, name, avatar }) => (
        <Story key={id} name={name} avatar={avatar} />
      ))}
    </div>
  );
}
