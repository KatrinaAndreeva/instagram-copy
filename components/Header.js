import Image from 'next/image';
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';
import { useRouter } from 'next/router';

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="sticky top-0 z-30 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto ">
        {/* logo */}
        <div className="relative hidden w-24 h-24 cursor-pointer lg:inline-grid">
          <Image
            onClick={() => router.push('/')}
            layout="fill"
            className="object-contain "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            alt="imstagram"
            priority
          />
        </div>
        <div className="relative inline-grid w-10 h-24 cursor-pointer lg:hidden">
          <Image
            onClick={() => router.push('/')}
            layout="fill"
            className="object-contain "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            alt="imstagram"
          />
        </div>
        {/* middle */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500 " />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 text-sm border-gray-500 rounded-md bg-gray-50 focus:ring-black focus:border-black"
          />
        </div>
        {/* auth section */}
        <div className="flex items-center space-x-4 cursor-pointer">
          <HomeIcon
            onClick={() => router.push('/')}
            className="hidden h-6 transition-transform duration-200 ease-out cursor-pointer hover:scale-125 md:inline-flex"
          />
          {session ? (
            <>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="h-6 transition-transform duration-200 ease-out cursor-pointer hover:scale-125"
                priority="true"
              />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="user-image"
                className="h-10 rounded-full"
              />
            </>
          ) : (
            <button onClick={() => signIn()}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}
