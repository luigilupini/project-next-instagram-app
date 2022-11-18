import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <Head>
        <title>Instagram Clone</title>
      </Head>

      <Header />
      <Feed />
      {/* Modal */}
    </div>
  );
}
