import React, {type FC} from "react";
import ReactCompareImage from "react-compare-image";
import dog from "../../../assets/dog.jpg";
import cat from "../../../assets/cat.jpg";

const BeforeAndAfterImg: FC = () => {
    return (
        <ReactCompareImage leftImage={dog} rightImage={cat}></ReactCompareImage>
    );
};

export default BeforeAndAfterImg;