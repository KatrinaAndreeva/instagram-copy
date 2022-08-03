import Posts from './Posts';
import Stories from './Stories';

export default function Feed() {
  return (
    <main className="grid grid-cols-1 mx-auto md:grid-cols-3 md:max-w-6xl">
      <section className="md:col-span-2">
        {/* stories */}
        <Stories />
        <Posts />
        {/* posts */}
      </section>
      <section className="hidden md:col-span-1 md:inline-grid ">
        {/* mini profiles */}

        {/* suggesctions */}
      </section>
    </main>
  );
}
