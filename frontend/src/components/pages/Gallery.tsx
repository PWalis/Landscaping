import {type FC} from "react";
import Header from "../UI/Header";
import GalleryContent from "../page elements/Gallery Sections/GalleryContent.tsx"
import Footer from "../UI/Footer.tsx";
import GalleryPictures from "../page elements/Gallery Sections/GalleryPictures.tsx";


const GalleryPage: FC = () => {
    return (
        <>
            <Header title="Isai's Landscaping | Gallery" isScrolled={false} servicesYPosition={0}/>
            <GalleryContent/>
            <GalleryPictures/>
            <Footer/>
            <></>
        </>
    );
};

export default GalleryPage;