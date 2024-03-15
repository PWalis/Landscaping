import { type FC, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setBeforeImage, setAfterImage } from "../../../ReduxStore/GalleryUploadSlice"; 
import Resizer from "react-image-file-resizer";

const UploadGalleryItem: FC = () => {
  const [imgBefore, setImgBefore] = useState<File>(null!);
  const [imgAfter, setImgAfter] = useState<File>(null!);
  const [cookies, setCookie] = useCookies(["accessToken"]);
  const dispatch = useDispatch();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("files", imgBefore);
    formData.append("files", imgAfter);
    formData.append("test", "this is a fucking test to see if anything comes through the body of this damn ass request")
    await fetch("https://isais-landscaping-c75898a4bda6.herokuapp.com/api/Gallery/uploadBeforeAndAfterImage", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + cookies.accessToken,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setAfterImage(null!)
        setBeforeImage(null!)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const imgBeforeChangeHandler = async(
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files![0]
    // const photo = window.URL.createObjectURL(file)
    Resizer.imageFileResizer(
      file,
      600,
      600,
      "JPEG",
      100,
      0,
      (uri) => {
       dispatch(setBeforeImage(uri as any));
      },
      "base64",
    );
    setImgBefore(file);
  };

  const imgAfterChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files![0]
    // const photo = window.URL.createObjectURL(file);
    Resizer.imageFileResizer(
      file,
      600,
      600,
      "JPEG",
      100,
      0,
      (uri) => {
       dispatch(setAfterImage(uri as any));
      },
      "base64",
    );
    setImgAfter(file);
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
