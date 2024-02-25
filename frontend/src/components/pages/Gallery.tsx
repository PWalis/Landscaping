import {type FC} from "react";
import Header from "../UI/Header";
import GalleryContent from "../page elements/Gallery Sections/GalleryContent.tsx"
import Footer from "../UI/Footer.tsx";
import GalleryPictures from "../page elements/Gallery Sections/GalleryPictures.tsx";
import GalleryComparison from "../page elements/Gallery Sections/BeforeAndAfterImg.tsx";
import BeforeAndAfterImg from "../page elements/Gallery Sections/BeforeAndAfterImg.tsx";

const GalleryPage: FC = () => {
    return (
        <>
            <Header title="Isai's Landscaping | Gallery" isScrolled={false} servicesYPosition={0}/>
            <GalleryContent/>
            <GalleryPictures/>
            <div className="grid grid-cols-3">
            <BeforeAndAfterImg/>
            <BeforeAndAfterImg/>
            <BeforeAndAfterImg/>
            </div>
            <Footer/>
            <></>
        </>
    );
};

export default GalleryPage;