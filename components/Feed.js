import Posts from './Posts';
import Stories from './Stories';

export default function Feed() {
  return (
    <main>
      <section>
        {/* stories */}
        <Stories />
        <Posts />
        {/* posts */}
      </section>
      <section>
        {/* mini profiles */}

        {/* suggesctions */}
      </section>
    </main>
  );
}
