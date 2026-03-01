"use client";
import { CldImage } from "next-cloudinary";

const DisplayImage = () => {
  return (
    <section className="grid grid-cols-2">
      <h1>Display Image</h1>
      <CldImage
        src="cld-sample-5" // Use this sample image or upload your own via the Media Library
        width="500" // Transform the image: auto-crop to square aspect_ratio
        height="500"
        alt=""
        crop={{
          type: "auto",
          source: true,
        }}
      />

      <CldImage width="600" height="600" src="cld-sample-4" alt="My Image" />
    </section>
  );
};
export default DisplayImage;
