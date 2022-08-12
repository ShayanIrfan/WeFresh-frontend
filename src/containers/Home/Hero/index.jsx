import './style.scss';
import RightContainer from "../../../components/Hero/right container";
import LeftContainer from "../../../components/Hero/left container";

function Hero() {

    return (
        <div className="Hero">
            <LeftContainer />
            <RightContainer />
        </div>
    );
}

export default Hero;