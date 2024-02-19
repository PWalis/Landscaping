import {type FC} from "react";
import BeforeAndAfterImg from "../page elements/Gallery Sections/BeforeAndAfterImg";
import UploadGalleryItem from "../page elements/Gallery Sections/UploadGalleryItem";

const GalleryDashboard: FC = () => {
  return (
    <div className="bg-slate-400 ">
      <h1 className="text-5xl text-gray-800 font-bold pb-3">Gallery Dashboard</h1>
      <UploadGalleryItem />
      <div className="max-w-96"><BeforeAndAfterImg /></div>
    </div>
  );
};

export default GalleryDashboard;
