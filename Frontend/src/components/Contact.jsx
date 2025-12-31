import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Contact = () => {
    const {
      register,
          handleSubmit,
          formState: { errors },
        } = useForm();
      
        const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
      <div className=" w-[500px] border-[2px] shadow-md p-5 rounded-md">
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        <h3 className="font-bold text-4xl">Contact us</h3>
        

        <div className="mt-4 space-y-2">
          <span>Name</span>
          <br />
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-100 px-3 py-1 border rounded-md outline-none"
            {...register('name', { required: 'Name is required' })}
          />
            <br/>
            {errors.name && <span className="text-red-500"> The field is required</span>}
        </div>

        <div className="mt-4 space-y-2">
              <span>E-mail</span>
              <br />
              <input type="email" placeholder='Enter you E-mail' className="w-100 px-3  py-1 border rounded-md outline-none" 
              {...register('email', { required: 'Email is required' })}
              />
               <br/>
               {errors.email && <span className="text-red-500"> The field is required</span>}
              </div>
        
         <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea className="textarea w-100" placeholder="Enter your Message" {...register('password', { required: 'Password is required' })}></textarea>
              <br/>
              {errors.password && <span className="text-red-500"> The field is required</span>}
              </div>

        <button  type="submit"className=" mt-5 bg-blue-500 text-white border rounded-md px-2 py-1 hover:bg-blue-700 duration-200">Submit</button>
        </form>
      </div> {/* Closing div added here */}
      </div>
    </>
  );
};

export default Contact;
