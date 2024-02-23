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
    (authorized && <div className="bg-slate-400 ">
      <h1 className="text-5xl text-gray-800 font-bold pb-3">Gallery Dashboard</h1>
      <UploadGalleryItem />
      <div className="max-w-96"><BeforeAndAfterImg /></div>
    </div>)
  );
};

export default GalleryDashboard;
