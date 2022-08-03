import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline';

export default function Post({ img, userImg, caption, username, id }) {
  return (
    <div className="bg-white border rounded-md my-7">
      {/* POst header */}
      <div className="flex items-center p-5">
        <img
          className="object-cover h-12 p-1 mr-3 border rounded-full"
          src={userImg}
          alt={username}
        />
        <p className="flex-1 font-bold ">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* image post */}
      <img className="object-cover w-full" src={img} alt={caption} />
      {/* btn  */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      {/* post comments */}
      <p className="p-5 truncate ">
        <span className="mr-2 font-bold">{username}</span>
        {caption}
      </p>

      {/* input comments */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          className="flex-1 border-none focus:ring-0"
          type="text"
          placeholder="Enter your comment..."
        />
        <button className="text-blue-400 text-bold">Post</button>
      </form>
    </div>
  );
}
