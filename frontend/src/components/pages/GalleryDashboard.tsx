import {type FC, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import BeforeAndAfterImg from "../page elements/Gallery Sections/BeforeAndAfterImg";
import UploadGalleryItem from "../page elements/Gallery Sections/UploadGalleryItem";

const GalleryDashboard: FC = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["accessToken"]);
  const [authorized, setAuthorized] = useState<boolean>(false);

  useEffect(() => {
    //check if user is authorized to load page
    fetch("http://localhost:3307/api/auth/authorize", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + cookies.accessToken, //send the token in the header
      },
    })
      .then((response) => {
        console.log(response);
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
    (authorized &&
        <div className="bg-stone-300/50 h-lvh">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl text-green-700/60 font-bold pb-3 mt-10">Gallery Dashboard</h1>
                <UploadGalleryItem />
            </div>
            <div className="mt-5 flex justify-center items-center h-auto">
                <div className='w-[600px]'>
                    <BeforeAndAfterImg />
                </div>
            </div>
    </div>)
  );
};

export default GalleryDashboard;
