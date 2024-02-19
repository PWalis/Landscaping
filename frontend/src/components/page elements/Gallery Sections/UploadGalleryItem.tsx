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
    <div className="flex flex-col max-w-96">
      <h1 className="text-2xl text-gray-800 font-bold pb-3">
        Upload Gallery Item
      </h1>
      <form className="grid grid-cols-2" onSubmit={submitHandler}>
        <label id="imgBefore">Before Image</label>
        <input
          type="file"
          id="img"
          name="imgBefore"
          accept="image/*"
          onChange={imgBeforeChangeHandler}
        />
        <label id="imgAfter">After Image</label>
        <input
          type="file"
          id="img"
          name="imgAfter"
          accept="image/*"
          onChange={imgAfterChangeHandler}
        />
        <button
          type="submit"
          className="border-2 border-gray-200 bg-gray-200/30 rounded-b-sm text-white hover:bg-green-600/10 py-1 px-3 text-lg font-bold font-sans2 mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadGalleryItem;
