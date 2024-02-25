import {type FC} from "react";
import ReactCompareImage from "react-compare-image";

interface BeforeAndAfterImgProps {
    beforeImage: string;
    afterImage: string;
}

const BeforeAndAfterImg: FC<BeforeAndAfterImgProps> = ({beforeImage, afterImage}) => {
    return (
        <ReactCompareImage leftImage={beforeImage} rightImage={afterImage}></ReactCompareImage>
    );
};

export default BeforeAndAfterImg;