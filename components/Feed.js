import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import { useSession } from 'next-auth/react';

export default function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid ${
        session
          ? 'grid-cols-1 mx-auto md:grid-cols-3 md:max-w-6xl'
          : 'grid-cols-1 mx-auto md:grid-cols-2 md:max-w-3xl'
      } `}
    >
      <section className="md:col-span-2">
        {/* stories */}
        <Stories />
        <Posts />
        {/* posts */}
      </section>
      <section className="hidden md:col-span-1 md:inline-grid ">
        {/* mini profiles */}
        <div className="fixed w-[380px]">
          <MiniProfile />
          {/* suggesctions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
}
