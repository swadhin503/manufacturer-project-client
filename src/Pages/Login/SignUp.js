import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';


const SignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    // const [info,setInfo]= useState();
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [token] = useToken(user||user1);
    const navigate = useNavigate();

    if(token){
        navigate('/');
        
    }
  

    let errorElement;
    if(error || error1){
        errorElement = <p className="text-red-500">{error?.message || error1.message}</p>
    }

    if(loading || loading1){
        return <Loading></Loading>
    }

    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password);
    }
    // console.log(user)
      const handleSignIn=() => {
        signInWithGoogle()
          
        }
    return (
        <div className="flex justify-center items-center h-screen my-10">
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-accent font-bold text-5xl">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                   <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Name</span>
                      </label>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" {...register("name", { required:{
                        value: true,
                        message: 'Name is Required'
                    }  })}/>
                      <label className="label">
                      {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}   
                      </label>
                    </div>

                   <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Email</span>
                      </label>
                    <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" {...register("email", { required:{
                        value: true,
                        message: 'Email is Required'
                    }  })}/>
                      <label className="label">
                      {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}   
                      </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Password</span>
                      </label>
                    <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" {...register("password", { required:{
                        value: true,
                        message: 'Password is Required'
                    },
                    minLength:{
                        value:8,
                        message: 'Must be at least 8 characters'
                    }
                    })}/>
                      <label className="label">
                      {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}   
                      {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}   
                      </label>
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Phone</span>
                      </label>
                    <input type="text" placeholder="Enter Your Phone Number" className="input input-bordered w-full max-w-xs" {...register("phone")}/>

                    <label className="label">
                        
                      </label>
                    </div>

                    
                    {errorElement}
                    <input className="btn btn-accent w-full max-w-xs text-white mt-4" type="submit" value="Sign Up" />
                </form>
                <p className="text-primary mt-3">Already have an account? <Link className="text-accent font-bold" to="/login">Login</Link></p>
                <div className="divider">OR</div>

                <button className="btn btn-outline btn-accent " onClick={handleSignIn}>Continue With Google</button>

            </div>
         </div>
    </div>
);
}; 

export default SignUp;