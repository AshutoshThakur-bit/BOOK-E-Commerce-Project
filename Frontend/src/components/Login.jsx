import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            
            {/* E-mail */}
            <div className="mt-4 space-y-2">
              <span>E-mail</span>
              <br />
              <input
                type="email"
                placeholder="Enter your E-mail"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('email', { required: 'Email is required' })}
              />
              <br/>
              {errors.email && <span className="text-red-500"> The field is required</span>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('password', { required: 'Password is required' })}
              />
              <br/>
              {errors.password && <span className="text-red-500"> The field is required</span>}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{' '}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
