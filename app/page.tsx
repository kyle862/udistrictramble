"use client";
import { useState } from "react";
import { photo } from "./photo-data";
import Lightbox from "./Lightbox";
import PhotoGrid from "./PhotoGrid";

export default function Home() {
  const [lightboxVisibility, setLightboxVisibility] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");
  return (
    <>
      <div className="mt-8 mb-80">
        <h1 className="text-9xl mb-24 font-sarina text-stone-900 max-w-lg">
          University District Ramble
        </h1>
        <PhotoGrid
          photos={photo}
          setPhoto={setSelectedPhoto}
          setLightboxViz={setLightboxVisibility}
        />
        <Lightbox
          photo={selectedPhoto}
          photos={photo}
          lightboxViz={lightboxVisibility}
          setLightboxViz={setLightboxVisibility}
        />
        <p className="my-12 max-w-xl text-stone-500">
          All images © 2025 Kyle Wendt
        </p>
      </div>
    </>
  );
}
