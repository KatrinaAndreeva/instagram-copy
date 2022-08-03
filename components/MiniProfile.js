export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between ml-10 mt-14">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQEPLSwqhVZ_Aw/profile-displayphoto-shrink_200_200/0/1657622443715?e=1665014400&v=beta&t=-yfu9buxJw700IGaYNs1VVg3w9AqdhkZ_s28sUBRm6c"
        alt="user-image"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">kate_websites</h2>
        <h3 className="text-sm text-gray-400">Front-end developer</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sign out</button>
    </div>
  );
}
