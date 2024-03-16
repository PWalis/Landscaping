import { type FC, useEffect, useState } from "react";

const GalleryItemList: FC = () => {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

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

  const onclickHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const id = event.currentTarget.id;
    await fetch(`${BASE_URL}/api/gallery/deleteGalleryItem`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log({data: data, id: id});
        const newGalleryItems = galleryItems.filter((item) => item.id !== Number(id));
        setGalleryItems(newGalleryItems);
        console.log({galleryItems: galleryItems, newGalleryItems: newGalleryItems});
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col bg-gray-300">
      <h1 className=" text-2xl">GalleryItemList</h1>
      {galleryItems.map((item) => {
        return (
          <div className="flex gap-10 h-60 m-auto mb-10" key={item.id}>
            <div className="flex relative h-60">
              <label htmlFor="before" className="text-2xl font-bold absolute left-20 -bottom-10">
                Before
              </label>
              <img src={item.before} alt="before" className=" object-contain" />
            </div>
            <div className="flex relative h-60">
                <label htmlFor="after" className="text-2xl font-bold absolute left-20 -bottom-10">
                    After
                </label>
              <img src={item.after} alt="after" className="object-contain" />
            </div>
            <button className="w-20 h-10 bg-red-700 text-xl border-2 border-black" id={item.id} onClick={onclickHandler}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default GalleryItemList;
