"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("hello world");
    router.push("/");
  };
  console.log(router);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default page;
