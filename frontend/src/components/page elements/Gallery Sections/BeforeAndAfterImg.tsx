import {type FC} from "react";
import ReactCompareImage from "react-compare-image";
import afterPic from "../../../assets/after-pic.jpg";
import beforePic from "../../../assets/before-pic.jpg";

const BeforeAndAfterImg: FC = () => {
    return (
        <ReactCompareImage leftImage={beforePic} rightImage={afterPic}></ReactCompareImage>
    );
};

export default BeforeAndAfterImg;