import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black mb-4">
          This page is coming soon ...
        </h1>
        <Link className="text-xl underline" href="/">Click here to go back</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
