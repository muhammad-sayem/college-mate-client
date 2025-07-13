"use client";

import { useContext, useState } from "react";
import logo from "@/assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import AuthContext from "../Context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const route = useRouter();

  const handleSignOut = () => {
    signOutUser();
    route.push("/login");
  };

  const handleProtectedRoute = (path) => {
    if (!user) {
      route.push("/login");
    } else {
      route.push(path);
    }
  };


  return (
    <div className="navbar fixed top-0 z-10 w-full px-4 md:px-6 lg:px-16 py-2 bg-sky-100">
      <div className="flex justify-between items-center w-full">
        {/* Logo and Site Name */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <Image className="w-12 h-12" src={logo} alt="Logo" />
            <span className="text-sm md:text-xl font-semibold text-sky-700">
              CollegeMate
            </span>
          </div>
        </Link>

        {/* Mobile: Menu toggle and user dropdown */}
        <div className="flex items-center space-x-4 md:hidden">
          {user && (
            <div className="dropdown dropdown-end z-50">
              {/* User name text instead of image */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost cursor-pointer px-4 py-2 text-sky-700 font-semibold text-base rounded"
                title={user?.displayName || user?.email}
              >
                {user?.displayName || user?.email}
              </div>

              {/* Dropdown menu */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <p className="p-3 text-sm">{user?.displayName || user?.email}</p>
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li className="mt-2">
                  <button
                    onClick={handleSignOut}
                    className="bg-gray-200 text-sm block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Menu toggle button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-4xl text-sky-700"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white bg-opacity-50 z-30 transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
        >
          <div className="w-64 bg-white h-full shadow-lg p-5">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-4xl text-sky-700 absolute top-4 right-4"
            >
              <FiX />
            </button>
            <ul className="mt-10 space-y-4 text-sky-700 text-sm">
              <li>
                <Link href="/"> HOME </Link>
              </li>
              <li>
                <Link href="/colleges">COLLEGES</Link>
              </li>
              <li>
                <Link href="/admission">ADMISSION </Link>
              </li>
              <li>
                <button className="btn" onClick={() => handleProtectedRoute("/my-college")} > MY COLLEGE </button>
              </li>
              {!user && (
                <li>
                  <Link href="/login" onClick={() => setMenuOpen(false)}>
                    LOGIN
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4 text-sm text-sky-700 font-bold">
            <li>
              <Link href="/"> HOME </Link>
            </li>
            <li>
              <Link href="/colleges">COLLEGES</Link>
            </li>
            <li>
              <Link href="/admission">ADMISSION </Link>
            </li>
            <li>
              <button className="hover:cursor-pointer" onClick={() => handleProtectedRoute("/my-college")} > MY COLLEGE </button>
            </li>
            {!user && <li> <Link href="/login">LOGIN</Link> </li>}
            {/* {user && (
              <li>
                <Link href="/profile">Profile</Link>
              </li>
            )} */}
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50">
              {/* User name text instead of image */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost cursor-pointer px-4 py-2 text-sky-700 font-semibold text-base rounded"
                title={user?.displayName || user?.email}
              >
                {user?.displayName || user?.email}
              </div>

              {/* Dropdown menu */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {/* <p className="p-3 text-sm">{user?.displayName || user?.email}</p> */}
                <li>
                  <Link href="/profile"> Profile </Link>
                </li>
                <li className="mt-2">
                  <button
                    onClick={handleSignOut}
                    className="bg-gray-200 text-sm block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
