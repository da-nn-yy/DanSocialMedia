import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc,collection } from "firebase/firestore";
import { auth, db } from "../../config/frbsConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import './create-form.css'



export const CreateForm = () =>{

  const [user]  = useAuthState(auth);

  const navigate = useNavigate();


  const schema  = yup.object().shape({
    title:yup.string().required("Must add a title"),
    description:yup.string().required("Must add a description"),
  });

  const {register,
    handleSubmit, 
    formState: {errors},
  } = useForm({
    resolver:yupResolver(schema), 
  });

  const postRef = collection(db,"posts")

  const createSubmit = (data) => {
    addDoc(postRef,{
      // title:data.title,
      // description: data.description, /////OR
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    })

    // console.log(data)
    navigate("/")
  };

  return(
    <>
    <form action=" " onSubmit={handleSubmit(createSubmit)}>
      <div>
        <input className="input" type="text" placeholder="Title..." {...register("title")}/>
        {errors.title && <p className="title-error">{errors.title?.message}</p>}
      </div>
      <div>
        <textarea placeholder="Description..." {...register("description")}/>
        {errors.description && <p className="desc-error">{errors.description?.message}</p>}
      </div>
      <input className="btn" type="submit" />
    </form>
    </>
  );
}; 

