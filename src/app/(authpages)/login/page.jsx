"use client";
import { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import SocialLogin from "@/app/shared/SocialLogin";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [error, setError] = useState("");
  const { signInUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one lowercase, one uppercase, and one digit!"
      );
    } else {
      signInUser(email, password)
        .then((result) => {
          console.log(result.user);
          router.push('/');
        })
        .then((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-blue-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              required
            />
            <div className="text-right text-sm mt-1">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-center font-medium">{error}</p>
          )}
          <button className="btn bg-sky-700 text-lg text-white w-full">Login</button>
        </form>

        <div className="divider my-6">or</div>

        <div className="flex flex-col gap-3">
          <SocialLogin />
        </div>

        <p className="mt-2 text-center"> New to the website? <span className="underline text-blue-700"> <Link href='/register'> Register Now </Link> </span> </p>
      </div>
    </div>
  );
};

export default Login;
