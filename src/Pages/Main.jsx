import { getDocs,collection   } from "firebase/firestore"
import { db } from "../config/frbsConfig"
import { useState } from "react"

export const Main = () => {
  const [postList,setPostList] = useState(null)

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
