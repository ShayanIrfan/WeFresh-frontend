import './style.scss';
import Input from '../../common/Input';
import Platforms from '../../common/Platforms';

function LeftContainer() {

    const heroLeftContent = {
        firstLine: "The smarter way",
        secondLine: "to order your food",
        placeholder: "Enter phone number",
        btnText: "Send"
    }

    return (
        <div className="left-container">
            <div>
                <div>
                    {heroLeftContent.firstLine}
                </div>
                <div>
                    {heroLeftContent.secondLine}
                </div>
            </div>
            <div>
                <Input placeholder={heroLeftContent.placeholder} btnText={heroLeftContent.btnText}/>
            </div>
            <div>
                <Platforms playstore="white" />
            </div>
        </div>
    );
}

export default LeftContainer;