import Stories from "./Stories";
// We mobile first approach as a single minmax(0, 1fr) grid at default.
// In larger viewpoint's are left `section` grid child is to span two cols.
export default function Feed() {
  return (
    <main className="grid grid-cols-1 mx-auto overflow-y-hidden md:grid-cols-2 xl:grid-cols-3 md:max-w-3xl xl:max-w-6xl scrollbar-hide">
      {/* Section (Left)*/}
      <section className="col-span-2">
        <Stories />
        {/* - Posts */}
      </section>

      {/* Section (Right) */}
      <section>
        {/* - Mini-profile */}
        {/* - Suggestions */}
      </section>
    </main>
  );
}
