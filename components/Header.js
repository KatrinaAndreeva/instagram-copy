import Image from 'next/image';
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <div className="sticky top-0 z-30 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto ">
        {/* logo */}
        <div className="relative hidden w-24 h-24 cursor-pointer lg:inline-grid">
          <Image
            layout="fill"
            className="object-contain "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            alt="imstagram"
            priority
          />
        </div>
        <div className="relative inline-grid w-10 h-24 cursor-pointer lg:hidden">
          <Image
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
          <HomeIcon className="hidden h-6 transition-transform duration-200 ease-out cursor-pointer hover:scale-125 md:inline-flex" />
          <PlusCircleIcon
            className="h-6 transition-transform duration-200 ease-out cursor-pointer hover:scale-125"
            priority="true"
          />
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEPLSwqhVZ_Aw/profile-displayphoto-shrink_200_200/0/1657622443715?e=1665014400&v=beta&t=-yfu9buxJw700IGaYNs1VVg3w9AqdhkZ_s28sUBRm6c"
            alt="user-image"
            className="h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
