import { type FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import BeforeAndAfterImg from "../page elements/Gallery Sections/BeforeAndAfterImg";
import UploadGalleryItem from "../page elements/Gallery Sections/UploadGalleryItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Store";
import GalleryItemList from "../page elements/Gallery Sections/GalleryItemList";

const GalleryDashboard: FC = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["accessToken"]);
  const [authorized, setAuthorized] = useState<boolean>(false);
  const beforeImage: string = useSelector(
    (state: RootState) => state.galleryUpload.value.beforeImage
  );
  const afterImage: string = useSelector(
    (state: RootState) => state.galleryUpload.value.afterImage
  );

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    //check if user is authorized to load page
    fetch(`${BASE_URL}/api/auth/authorize`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + cookies.accessToken, //send the token in the header
      },
    })
      .then((response) => {
        if (response.status === 403) {
          navigate("/login");
        } else {
          setAuthorized(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    authorized && (
      <div className="bg-stone-300/50 h-lvh">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-green-700/60 font-bold pb-3 mt-10">
            Gallery Dashboard
          </h1>
          <UploadGalleryItem />
        </div>
        <div className="mt-5 flex justify-center items-center h-auto">
          <div className="w-[600px]">
            <BeforeAndAfterImg
              beforeImage={beforeImage}
              afterImage={afterImage}
            />
          </div>
        </div>
        <GalleryItemList />
      </div>
    )
  );
};

export default GalleryDashboard;
