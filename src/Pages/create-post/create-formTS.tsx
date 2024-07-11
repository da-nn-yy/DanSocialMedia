import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { addDoc,collection } from "firebase/firestore";
import { auth, db } from "../../config/frbsConfig";
import { useAuthState } from "react-firebase-hooks/auth";

interface CreateFormData {
  title:string;
  description:string;  
}

export const CreateForm = () =>{

  const [user]  = useAuthState(auth);

  
  const schema  = yup.object().shape({
    title:yup.string().required("Must add a title"),
    description:yup.string().required("Must add a description"),
  });

  const {register , handleSubmit,formState:{errors}} = useForm<CreateFormData>({
    resolver:yupResolver(schema), 
  });

  const postRef = collection(db,"posts")

  const createSubmit = (data:CreateFormData) => {
    addDoc(postRef,{
      // title:data.title,
      // description: data.description, /////OR
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    })
    console.log(data)
  };

  return(
    <form action=" " onSubmit={handleSubmit(createSubmit)}>
      <input type="text" placeholder="Title..." {...register("title")}/>
      <p>{errors.title?.message}</p>
      <textarea placeholder="Description..." {...register("description")}/>
      <p>{errors.description?.message}</p>
      <input type="submit" />
    </form>
  );
}; 