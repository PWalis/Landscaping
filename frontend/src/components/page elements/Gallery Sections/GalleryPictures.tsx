import "../../../index.css";
import galleryImage from "../../../assets/sedona_1b.jpg"
import galleryImage2 from "../../../assets/testimonials-image-2.jpg"
import galleryImage3 from "../../../assets/after-pic.jpg"


const GalleryPictures: React.FC = () => {
    return (
        <div className="grid grid-cols-2 ">
            <div className="overflow-hidden"><img className="w-full h-full object-cover" src={galleryImage} alt="" /></div>
            <div className="overflow-hidden"><img className="w-full h-full object-cover" src={galleryImage2} alt="" /></div>
            <div className="overflow-hidden"><img className="w-full h-full object-cover" src={galleryImage3} alt="" /></div>
            <div className="overflow-hidden"><img className="w-full h-full object-cover" src={galleryImage} alt="" /></div>
        </div>
    );
};

export default GalleryPictures;