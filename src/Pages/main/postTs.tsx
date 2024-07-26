import React, { useEffect, useState } from "react"
import { Post as IPost } from "./MainTs"
import { addDoc, collection,getDocs,query, where } from "firebase/firestore"
import { auth, db } from "../../config/frbsConfig"
import { useAuthState } from "react-firebase-hooks/auth"

interface Props {
  post:IPost

}

interface Like {
  userId : string,
}
export const PostTs =(props: Props) => {
  const {post} = props;

  const [likes ,setLikes] = useState<Like[] | null>(null)

  const [user]  = useAuthState(auth);
  const likesRef = collection(db,"likes")

  const likeDoc = query(likesRef,where("postId","==",post.id))

  const getLike = async  () =>{
    const data = await getDocs(likeDoc);
    setLikes (data.docs.map((doc) => ({ userId: doc.data().userId})));
  } 
  const addLike = async () => {
    await addDoc(likesRef,{
      userId: user?.uid,
      postId: post.id
    });

    const userLiked = likes?.find((like) => like.userId === user?.uid);

    useEffect(() => {
      getLike();
    },[])
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
        <button className="btn" style={{width:"3rem"}} onClick={addLike}>{userLiked ? <>&#128078;</> : <>&#128077;</>} </button>
        {likes && <p>Likes:{likes?.length}</p>}
      </div>
    </div>
  )
}