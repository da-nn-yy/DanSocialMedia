import React from "react"
import { Post as IPost } from "./MainTs"
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/frbsConfig"
import { useAuthState } from "react-firebase-hooks/auth"

interface Props {
  post:IPost

}
export const PostTs =(props: Props) => {
  const {post} = props;

  const [user]  = useAuthState(auth);
  const likesRef = collection(db,"likes   ")

  const addLike = async () => {
    await addDoc(likesRef,{
      userId: user?.uid,
      postId: post.id
    });
  }
  return(
    <div>
      <div className="title">
        <h2>{post.title}</h2>
      </div>
      <div className="descrp">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <p>@{post.username}</p>
        <button> &#128077;</button>
      </div>
    </div>
  )
}