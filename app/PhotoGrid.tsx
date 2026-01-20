"use client";
import { Photo } from "./photo-data";

export default function PhotoGrid({
  photos,
  setPhoto,
  setLightboxViz,
}: {
  photos: Photo[];
  setPhoto: (photoId: string) => void;
  setLightboxViz: (visibility: boolean) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="overflow-hidden rounded-lg">
          <img
            src={"./" + photo.id + ".jpeg"}
            alt="An image"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onClick={() => (setLightboxViz(true), setPhoto(photo.id))}
          />
        </div>
      ))}
    </div>
  );
}
