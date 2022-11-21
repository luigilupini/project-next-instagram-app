import { useEffect, useState } from "react";
import Post from "./Post";

/* # `onSnapshot` a reference to the document to listen to.
Attach a listener for `DocumentSnapshot` events. You can either pass individual onNext & onError callbacks or pass a single observer object with next and error callbacks. Although an onCompletion callback can be provided, it will never be called because the snapshot stream is never-ending. @returns an unsubscribe function that can be called to cancel snapshot listener. */
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

// const dummyPosts = [
//   {
//     id: "123",
//     username: "mario",
//     userImg: "/user-mario.png",
//     img: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     caption: "Mamma mia! I am number one.",
//   },
//   {
//     id: "124",
//     username: "mario",
//     userImg: "/user-mario.png",
//     img: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VwZXIlMjBtYXJpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2070&q=60",
//     caption: "It's-a me, Mario!",
//   },
// ];

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "posts");
    const unsubscribe = onSnapshot(
      query(collectionRef, orderBy("timestamp", "desc")),
      (snapshot) => setPosts(snapshot.docs)
    );
    return () => unsubscribe();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.data().id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}
