import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

// We mobile first approach as a single minmax(0, 1fr) grid at default.
// In larger viewpoint's are left `section` grid child is to span two cols.
export default function Feed() {
  return (
    <main className="grid grid-cols-1 mx-auto overflow-y-hidden md:grid-cols-2 xl:grid-cols-3 md:max-w-3xl xl:max-w-6xl scrollbar-hide">
      {/* Section (Left)*/}
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      {/* Section (Right) */}
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
}
