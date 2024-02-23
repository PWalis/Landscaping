import { type FC, useState } from "react";
import { useCookies } from "react-cookie";

const UploadGalleryItem: FC = () => {
  const [imgBefore, setImgBefore] = useState<File>(null!);
  const [imgAfter, setImgAfter] = useState<File>(null!);
  const [cookies, setCookie] = useCookies(["accessToken"]);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("files", imgBefore);
    formData.append("files", imgAfter);
    formData.append("test", "this is a fucking test to see if anything comes through the body of this damn ass request")
    await fetch("http://localhost:3307/api/Gallery/uploadBeforeAndAfterImage", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + cookies.accessToken,
      },
      body: formData,
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
    // const reader = new FileReader();
    // reader.readAsDataURL(event.target.files![0]);
    // reader.onloadend = (data) => {setImgBefore(data.target?.result as string)};
    setImgBefore(event.target.files![0]);
  };

  const imgAfterChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(event.target.files![0]);
    // reader.onloadend = (data) => {setImgBefore(data.target?.result as string)};
    setImgAfter(event.target.files![0]);
  };

  return (
    <div className="flex flex-col max-w-96">
      <h1 className="text-2xl text-gray-800 font-bold pb-3">
        Upload Gallery Item
      </h1>
      <form encType="multipart/form-data" className="grid grid-cols-2"  onSubmit={submitHandler}>
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
