import './style.scss';
import RightContainer from "../../../components/Hero/right container";
import LeftContainer from "../../../components/Hero/left container";
import BgFill from '../../../components/Hero/background fills';

function Hero({ zIndex }) {

    return (
        <>
            <div className="flex-space-around Hero" style={{zIndex: zIndex ? "1" : "0"}}>
                <LeftContainer />
                <RightContainer />
            </div>
            <BgFill />
        </>
    );
}

export default Hero;