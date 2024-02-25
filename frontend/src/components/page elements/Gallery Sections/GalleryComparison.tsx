import "../../../index.css";
import BeforeAndAfterImg from "./BeforeAndAfterImg.tsx";


const GalleryComparison: React.FC = () => {
    return (
            <div className="p-10">
            <BeforeAndAfterImg/>
                <BeforeAndAfterImg/>
                <BeforeAndAfterImg/>
            </div>
    );
};

export default GalleryComparison;