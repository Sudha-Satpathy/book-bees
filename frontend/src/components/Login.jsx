import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success(res.data.message);
          document.getElementById("my_modal_3").close();
          navigate("/")
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
        localStorage.setItem("users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error(err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <div>
              <div className="flex justify-center mb-4">
                <FaUserCircle className="w-16 h-16 text-yellow-500" />
              </div>
              <h3 className="font-bold text-2xl text-center">User Login</h3>
            </div>
            <div className="flex flex-col gap-5">
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
                    className="input input-warning w-full dark:bg-transparent"
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
                    className="input input-warning w-full dark:bg-transparent"
                  />
                  <div className="mx-2 mt-2">
                    {errors.password && (
                      <span className="text-red-500">Password is required</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="hover:bg-yellow-600 hover:text-white mt-5 w-1/2 px-3 py-2 rounded-md bg-yellow-500 text-white font-bold cursor-pointer duration-500">
                Login
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center mt-3 gap-2">
            <p>New User?</p>
            <Link
              to={"/register"}
              className="font-semibold hover:text-yellow-600 hover:font-normal hover:scale-105 duration-400"
            >
              Register Now
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
