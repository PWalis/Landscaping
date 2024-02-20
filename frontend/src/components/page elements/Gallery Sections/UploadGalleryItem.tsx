import { type FC, useState } from "react";

const UploadGalleryItem: FC = () => {
  const [imgBefore, setImgBefore] = useState<string>("");
  const [imgAfter, setImgAfter] = useState<string>("");

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      beforeImage: imgBefore,
      afterImage: imgAfter,
    };
    await fetch("http://localhost:3307/api/Gallery/uploadBeforeAndAfterImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const imgBeforeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files![0]);
    reader.onloadend = (data) => {setImgBefore(data.target?.result as string)};
  };

  const imgAfterChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files![0]);
    reader.onloadend = (data) => {setImgAfter(data.target?.result as string)};
  };

  return (
    <div className="flex flex-col max-w-96 items-center justify-center">
      <h1 className="text-2xl text-green-900 font-bold pb-3">
        Upload Gallery Item
      </h1>
      <form className="grid grid-cols-2 text-zinc-500 pb-3" onSubmit={submitHandler}>
        <label id="imgBefore">Browse Before Image: </label>
        <input
          type="file"
          id="img"
          name="imgBefore"
          accept="image/*"
          onChange={imgBeforeChangeHandler}
        />
        <label id="imgAfter">Browse After Image: </label>
        <input
          type="file"
          id="img"
          name="imgAfter"
          accept="image/*"
          onChange={imgAfterChangeHandler}
        />
        <div className="col-span-2 flex items-center justify-center">
        <button
          type="submit"
          className="rounded-b-sm text-white bg-green-800 py-1 px-10 text-lg font-bold font-sans2 mt-3"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default UploadGalleryItem;
