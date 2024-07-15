import React from "react"
import { Post as IPost } from "./MainTs"

interface Props {
  post:IPost

}
export const PostTs =(props: Props) => {
  const {post} = props;
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
      </div>
    </div>
  )
}