import './style.scss';
import phoneImg from "../../../assets/images/iPhone_Black.png";
import { ReactComponent as Fill5 } from '../../../assets/svgs/Fill5.svg';

function RightContainer() {

    return (
        <div className="right-container">
            <img src={phoneImg} alt="phone-img" />
            <div>
                <Fill5 />
            </div>
        </div>
    );
}

export default RightContainer;