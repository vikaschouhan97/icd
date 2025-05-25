"use client";

import { useEffect, useState } from "react";
import "./loading.css";

export default function ImagePreloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);
    const total = images.length;

    if (total === 0) {
      setImagesLoaded(true);
      return;
    }

    let loaded = 0;

    const checkAllImagesLoaded = () => {
      loaded += 1;
      if (loaded === total) {
        setImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkAllImagesLoaded();
      } else {
        img.addEventListener("load", checkAllImagesLoaded);
        img.addEventListener("error", checkAllImagesLoaded); // Handle failed loads
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", checkAllImagesLoaded);
        img.removeEventListener("error", checkAllImagesLoaded);
      });
    };
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="hourglassBackground">
          <div className="hourglassContainer">
            <div className="hourglassCurves"></div>
            <div className="hourglassCapTop"></div>
            <div className="hourglassGlassTop"></div>
            <div className="hourglassSand"></div>
            <div className="hourglassSandStream"></div>
            <div className="hourglassCapBottom"></div>
            <div className="hourglassGlass"></div>
          </div>
        </div>
      </div>
    ); // Your custom loading screen
  }

  return <>{children}</>;
}

// import React from "react";
// import "./loading.css";

// const Loading = () => {
//   return (
//
//   );
// };

// export default Loading;
