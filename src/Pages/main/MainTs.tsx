import { getDocs,collection   } from "firebase/firestore"
import { db } from "../../config/frbsConfig";
import { useEffect, useState } from "react"
import React from "react";
import { PostTs } from "./postTs";
interface Post {
  id:string;
  userId:string;
  title:string;
  username:string;
  description:string;
}

export const MainTs = () => {
  const [postList,setPostList] = useState<Post[] | null>(null)

  const postRef = collection(db,"posts")
  const getMyPosts = async () => {
    const data = await getDocs(postRef)
    setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})) as Post[]);
  }
  useEffect(() => {
    getMyPosts()
  },[])
  return (
    <div>{postList?.map((post)=> (
    <PostTs />
  ))}
  </div>
  )
 }
