import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";

interface CreateFormData {
  title:string;
  description:string;  
}

export const CreateForm = () =>{
  const schema  = yup.object().shape({
    title:yup.string().required("Must add a title"),
    description:yup.string().required("Must add a title"),
  });

  const {register , handleSubmit} = useForm<CreateFormData>({
    resolver:yupResolver(schema), 
  });

  const createSubmit = (data:CreateFormData) => {
    console.log(data)
  };

  return(
    <form action=" " onSubmit={handleSubmit(createSubmit)}>
      <input type="text" placeholder="Title..." {...register("title")}/>
      <textarea placeholder="Description..." {...register("description")}/>
      <input type="submit" />
    </form>
  );
}; 