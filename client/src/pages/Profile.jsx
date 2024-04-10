import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-5">Profile</h1>

      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-40 w-40 object-cover self-center my-2 cursor-pointer"
          src={currentUser.avatar}
          alt="profile"
        />
        <input
          className="border rounded-lg p-3"
          type="text"
          placeholder={currentUser.username}
          id="username"
        />
        <input
          className="border rounded-lg p-3"
          type="email"
          placeholder={currentUser.email}
          id="email"
        />
        <input
          className="border rounded-lg p-3"
          type="password"
          placeholder="password"
          id="password"
        />
        <button className="rounded-lg bg-slate-700 text-white p-3 uppercase hover:opacity-95 disabled:opacity-80 ">
          Update
        </button>

        <button className="bg-green-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Create listing
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
