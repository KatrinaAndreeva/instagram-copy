import Image from 'next/image';
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <div className="shadow-sm sticky border-b top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl xl:mx-auto mx-4 ">
        {/* logo */}
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            layout="fill"
            className="object-contain "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            alt="imstagram"
          />
        </div>
        <div className="h-24 w-10 relative inline-grid lg:hidden cursor-pointer">
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
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>
        {/* auth section */}
        <div className="flex space-x-4 items-center cursor-pointer">
          <HomeIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out hidden md:inline-flex" />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
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
