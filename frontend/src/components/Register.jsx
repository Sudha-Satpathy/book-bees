import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success(res.data.message);
          navigate("/");
          setTimeout(() => {
            window.location.reload();
          }, 1000);

          localStorage.setItem("users", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error(err.response.data.message);
        }
      });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <div className="flex justify-center mb-4">
          <FaUserCircle className="w-16 h-16 text-yellow-500" />
        </div>
        <h3 className="font-bold text-2xl text-center my-2">
          User Registration
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="font-bold">
                Username
              </label>
              <div>
                <input
                  type="text"
                  name="fullname"
                  id="name"
                  placeholder="enter your name"
                  {...register("fullname", { required: true })}
                  className="input input-warning dark:bg-transparent"
                />
                <div className="mx-2 mt-2">
                  {errors.fullname && (
                    <span className="text-red-500">Username is required</span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email"
                  {...register("email", { required: true })}
                  className="input input-warning dark:bg-transparent"
                />
                <div className="mx-2 mt-2">
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="enter your password"
                  {...register("password", { required: true })}
                  className="input input-warning dark:bg-transparent"
                />
                <div className="mx-2 mt-2">
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                </div>
              </div>
            </div>
            <button className="hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md bg-yellow-500 text-white font-bold cursor-pointer duration-500">
              Register
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center items-center mt-3 gap-2">
        <p>Already have an account??</p>
        <button
          className="font-semibold hover:text-yellow-600 hover:scale-105 duration-400"
          onClick={() => {
            document.getElementById("my_modal_3").showModal();
          }}
        >
          Login
        </button>
        <Login />
      </div>
      <div className=" w-2/12">
        <button className="hover:text-yellow-500 px-3 py-2 w-full" onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
};

export default Register;
