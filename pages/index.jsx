import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-br from-slate-100 via-slate-200 to-slate-400">
      <Head>
        <title>Instagram Clone</title>
      </Head>

      <Header />
      <Feed />
      {/* Modal */}
    </div>
  );
}
