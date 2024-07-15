import { getDocs,collection   } from "firebase/firestore"
import { db } from "../config/frbsConfig"
import { useState } from "react"

interface Post {
  id:string;
  userId:string;
  title:string;
  username:string;
  description:string;
}

export const Main = () => {
  const [postList,setPostList] = useState<Post[] | null>(null)

  const postRef = collection(db,"posts")
  const getMyPosts = async () => {
    const data = await getDocs(postRef)
    setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  }
  getMyPosts();
  return (
    <div>{postList}</div>
  )
 }
