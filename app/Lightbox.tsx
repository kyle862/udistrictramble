import { Photo } from "./photo-data";

export default function Lightbox({
  photo,
  photos,
  lightboxViz,
  setLightboxViz,
}: {
  photo: string;
  photos: Photo[];
  lightboxViz: boolean;
  setLightboxViz: (visibility: boolean) => void;
}) {
  let visibilityClass = lightboxViz ? "block" : "hidden";
  let photoName = photos.find((p) => p.id === photo)?.name;
  let photoDescription = photos.find((p) => p.id === photo)?.description;

  return (
    <div
      className={
        "fixed top-0 left-0 h-dvh w-dvw flex items-center justify-center bg-white text-black " +
        visibilityClass
      }
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src={photo + ".jpeg"}
          alt="Lightbox Image"
          className="max-h-3/4 max-w-3/4"
        />
        <p className="flex-1">"{photoName}"</p>
        <p className="flex-1 text-sm text-gray-400">© 2025 Kyle Wendt</p>
      </div>

      <div
        className="absolute top-8 right-16 cursor-pointer"
        onClick={() => setLightboxViz(false)}
      >
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
            fill="#000000"
          />
        </svg>
      </div>
    </div>
  );
}
