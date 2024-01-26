import React from "react";
import picture_upload from "../assets/picture_upload.png";
import background from "../assets/background.png";

export default function Home() {
  return (
    <div
      className=" h-dvh bg-black"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <img src={picture_upload} alt="profile_picture" />
      </div>
    </div>
  );
}
