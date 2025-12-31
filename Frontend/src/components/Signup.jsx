import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (<>

    <div className="flex justify-center items-center h-screen">
      <div className=" w-[400px] border-[2px] shadow-md p-5 rounded-md">
        <div className="modal_box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

            <h3 className="font-bold text-lg">Signup</h3>

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input type="Name" placeholder='Enter you Name' className="w-80 px-3  py-1 border rounded-md outline-none" 
              {...register('name', { required: 'Name is required' })}
              />
              <br/>
              {errors.name && <span className="text-red-500"> The field is required</span>}
            </div>

            {/*E-mail*/}
            <div className="mt-4 space-y-2">
              <span>E-mail</span>
              <br />
              <input type="email" placeholder='Enter you E-mail' className="w-80 px-3  py-1 border rounded-md outline-none" 
              {...register('email', { required: 'Email is required' })}
              />
             
             <br/>
             {errors.email && <span className="text-red-500"> The field is required</span>}
              
            </div>

            {/*Password*/}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input type="password" placeholder='Enter you Password' className="w-80 px-3  py-1 border rounded-md outline-none"
              {...register('password', { required: 'Password is required' })}
               />
               <br/>
               {errors.password && <span className="text-red-500"> The field is required</span>}
            </div>

            {/*Button*/}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
              <p>Have account?{" "}
                <span className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >Login</span> {""} </p>
              <Login />
            </div>
          </form>
        </div>
      </div>
    </div>
  </>

  )
}

export default Signup