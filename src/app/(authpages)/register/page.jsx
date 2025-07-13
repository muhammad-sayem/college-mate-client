"use client";
import { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import SocialLogin from "@/app/shared/SocialLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one lowercase, one uppercase, and one digit!"
      );
      return;
    }

    try {
      const result = await createUser(email, password);
      const user = result.user;

      // ✅ Update displayName and photoURL
      await updateUserProfile(name, photoURL);

      console.log("Registered User:", user);
      router.push("/");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-blue-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create a New Account
        </h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              className="input input-bordered w-full"
              placeholder="Link to your photo"
            />
          </div>
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
          </div>
          {error && (
            <p className="text-red-500 text-center font-medium">{error}</p>
          )}
          <button className="btn bg-sky-700 text-white text-lg w-full mb-2">
            Register
          </button>
        </form>

        <div className="divider my-6">or</div>

        <div className="flex flex-col gap-3">
          <SocialLogin />
        </div>

        <p className="mt-2 text-center">
          Already have an account?{" "}
          <span className="underline text-blue-700">
            <Link href="/login"> Login Now </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
