import Post from './Post';

export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'kate_websites',
      userImg:
        'https://media-exp1.licdn.com/dms/image/C4D03AQEPLSwqhVZ_Aw/profile-displayphoto-shrink_200_200/0/1657622443715?e=1665014400&v=beta&t=-yfu9buxJw700IGaYNs1VVg3w9AqdhkZ_s28sUBRm6c',
      img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1134&q=80',
      caption: 'Beautiful Turkey',
    },
    {
      id: '2',
      username: 'kate_websites',
      userImg:
        'https://media-exp1.licdn.com/dms/image/C4D03AQEPLSwqhVZ_Aw/profile-displayphoto-shrink_200_200/0/1657622443715?e=1665014400&v=beta&t=-yfu9buxJw700IGaYNs1VVg3w9AqdhkZ_s28sUBRm6c',
      img: 'https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      caption: 'Glory to Ukraine',
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
