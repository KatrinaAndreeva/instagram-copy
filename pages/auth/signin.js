import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-20 space-x-7">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/hero-top/instagram/opera__feature--instagram__mobile@2x.a10b322cae5a.png"
          alt="insta-image"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="object-cover w-32"
                src="https://prm.ua/wp-content/uploads/2021/07/social-1834010_1920.png "
                alt=""
              />
              <p className="my-10 text-sm italic text-center">
                This app is created for learning purposes
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className="p-3 text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
