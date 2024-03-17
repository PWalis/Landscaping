import { type FC, useEffect, useState } from "react";
import Header from "../UI/Header";
import GalleryContent from "../page elements/Gallery Sections/GalleryContent.tsx";
import Footer from "../UI/Footer.tsx";
import GalleryPictures from "../page elements/Gallery Sections/GalleryPictures.tsx";
import BeforeAndAfterImg from "../page elements/Gallery Sections/BeforeAndAfterImg.tsx";

const GalleryPage: FC = () => {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  console.log(BASE_URL);

  useEffect(() => {
    fetch(`${BASE_URL}/api/gallery/getGallery`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGalleryItems(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className=" bg-gray-300">
      <Header
        title="Isai's Landscaping | Gallery"
        isScrolled={false}
        servicesYPosition={0}
      />
      <GalleryContent />
      <GalleryPictures showLastImage={galleryItems.length % 2 === 0}>
        {galleryItems.map((item) => {
          return (
            <BeforeAndAfterImg
              beforeImage={item.before}
              afterImage={item.after}
              key={item.id}
            />
          );
        })}
      </GalleryPictures>
      <Footer />
    </div>
  );
};

export default GalleryPage;
