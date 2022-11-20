import Post from "./Post";

const dummyPosts = [
  {
    id: "123",
    username: "mario",
    userImg: "/user-mario.png",
    img: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    caption: "Mamma mia! I am number one.",
  },
  {
    id: "124",
    username: "mario",
    userImg: "/user-mario.png",
    img: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VwZXIlMjBtYXJpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2070&q=60",
    caption: "It's-a me, Mario!",
  },
];

export default function Posts() {
  return (
    <div>
      {dummyPosts.map(({ id, username, userImg, img, caption }) => (
        <Post
          key={id}
          id={id}
          username={username}
          userImg={userImg}
          img={img}
          caption={caption}
        />
      ))}
    </div>
  );
}
