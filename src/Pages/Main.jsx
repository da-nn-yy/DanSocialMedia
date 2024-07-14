import { getDoc,collection   } from "firebase/firestore"
import { db } from "../config/frbsConfig"
import { useState } from "react"

export const Main = () => {
  const [postList,setPostList] = useState(null)

  const postRef = collection(db,"posts")
  return (
    <div>Home page</div>
  )
}
