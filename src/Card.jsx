import React, { useEffect, useState } from "react";

const Card = (data) => {

  let {
    data: {
      name,
      login: username,
      email,
      location,
      bio,
      following,
      followers,
      avatar_url: image,
      public_repos,
      html_url: profile,
    },
  } = data;

  return (
    <div className="card w-1/3 max-w-[fit]   sm:w-fit h-3/4 bg-blue-400 mx-auto min-h-fit rounded-2xl p-2 flex sm:flex-row flex-col gap-5 sm:justify-center sm:items-center w-fit items-center">
      {/* Image section */}
      <div className=" sm:min-h-[120px] sm:min-w-[120px] sm:w-fit  sm:h-fit   flex justify-center items-center  rounded-2xl   ">
        <img
          src={
            image ??
            "https://https://www.istockphoto.com/photos/user-profile-image"
          }
          // alt="https://www.istockphoto.com/photos/user-profile-image"
          className=" rounded-[50%] sm:min-h-[190px] sm:min-w-[190px] h-60 w-60 border-2 object-cover"
        />
      </div>

          {/*  card second section */}
      <div className="h-fit w-fit bg-green-400 flex rounded-2xl p-1 gap-3 text-black sm:flex-row flex-col">
        <div className="bg-pink-400 rounded-2xl p-2 sm:max-w-62.5 sm:max-h-62.5 sm:min-w-45 ">
          <div className="w-full   text-center bg-purple-200 text-black rounded-2xl">
            <h2>{name ?? "N/A"}</h2>
          </div>
          <div className="w-full p-2">
            <h2>
              Username: <span>{username ?? "N/A"}</span>
            </h2>
            <h2>
              Email: <span>{email ?? "N/A"}</span>
            </h2>
            <h2>
              Location: <span>{location ?? "N/A"}</span>
            </h2>
            <div className="text-center bg-amber-300 rounded-2xl">Bio</div>
            <p className="text-sm sm:h-25 overflow-auto text-center mt-2">
              {bio ?? "N/A"}
            </p>
          </div>
        </div>
        <div className="bg-purple-400 rounded-2xl p-2 sm:max-w-[250px] sm:max-h-62.5 sm:min-w-45 w-62.5 w-full sm:w-62.5 ">

                {/* heading box of account info */}
          <p className="text-xl text-center bg-amber-300 rounded-2xl mb-2">
            Account info
          </p>

          {/*  box of the information */}

          <div>
            <h2>
              Following: <span>{following ?? "N/A"}</span>
            </h2>
            <h2>
              Followers: <span>{followers ?? "N/A"}</span>
            </h2>
            <h2>
              Public Repositories: <span>{public_repos ?? "N/A"}</span>
            </h2>
            <div className="flex gap-2  max-h-full">
              <p className="leading-5 whitespace-nowrap">Profile Link:</p>
              <a href={profile} target="_blank" className="flex wrap-anywhere leading-5">
                {profile ?? "N/A"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
