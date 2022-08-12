import './style.scss';
import RightContainer from "../../../components/Hero/right container";
import LeftContainer from "../../../components/Hero/left container";
import BgFill from '../../../components/Hero/background fills';

function Hero() {

    return (
        <>
            <div className="flex-space-around Hero">
                <LeftContainer />
                <RightContainer />
            </div>
            <BgFill />
        </>
    );
}

export default Hero;