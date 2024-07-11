import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
export const CreateForm = () =>{
  const schema  = yup.object().shape({
    title:yup.string().required("Must add a title"),
    description:yup.string().required("Must add a title"),
  });

  const {register ,hundleSubmit} = useForm({
    resolver:yupResolver(schema), 
  })

  return(
    <form action=" ">
      <input type="text" placeholder="Title..." {...register("title")}/>
      <textarea type="text" placeholder="Description..." {...register("description")}/>
      <input type="submit" />
    </form>
  );
};