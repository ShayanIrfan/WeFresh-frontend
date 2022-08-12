import './style.scss';
import { useMediaQuery } from 'react-responsive';  
import Input from '../../common/Input';
import Platforms from '../../common/Platforms';

function LeftContainer() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 781px)'
    });

    const heroLeftContent = {
        firstLine: "The smarter way",
        secondLine: "to order your food",
        placeholder: isDesktopOrLaptop ? "Enter phone number" : "Phone number",
        btnText: "Send"
    }

    return (
        <div className="left-container">
            <div className="content-section">
                <div className="first-line">
                    {heroLeftContent.firstLine}
                </div>
                <div className="second-line">
                    {heroLeftContent.secondLine}
                </div>
            </div>
            <div className="input-section">
                <Input placeholder={heroLeftContent.placeholder} btnText={heroLeftContent.btnText} />
            </div>
            <div className='platform-section'>
                <Platforms playstore="white" textColor="white" />
            </div>
        </div>
    );
}

export default LeftContainer;