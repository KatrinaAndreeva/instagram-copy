import { useEffect, useState } from 'react';
import Story from './Story';
import minifaker from 'minifaker';
import 'minifaker/locales/en';
import data from '../users.json';

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    // const storyUsers = data.map((user) => ({
    //   username: user.username,
    //   img: user.img,
    //   id: user.id,
    // }));
    // setStoryUsers(storyUsers);
    // console.log(storyUsers);

    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
    console.log(storyUsers);
  }, []);
  return (
    <div className="flex p-6 mt-8 space-x-2 overflow-x-scroll bg-white border border-gray-200 rounded-sm scrollbar-none">
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}
