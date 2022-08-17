import './style.scss';
import AppleLogo from '../../../assets/images/Apple.png';
import GoogleplayLogo from '../../../assets/images/Googleplay.png';
import GoogleplayWhiteLogo from '../../../assets/images/GoogleplayWhite.png';

function Platforms({ playstore, textColor }) {

    return (
        <div className="platforms">
            <p style={{ color: textColor === "white" ? "#ffffff" : "#868E95" }}>Available on</p>
            <div className="flex-center">
                <div className='first-logo'>
                    <img src={AppleLogo} alt="AppleLogo" />
                </div>
                {playstore === "white" ?
                    <div className='second-logo'>
                        <img src={GoogleplayWhiteLogo} alt="GoogleplayWhiteLogo" />
                    </div>
                    :
                    <div className='second-logo'>
                        <img src={GoogleplayLogo} alt="GoogleplayLogof" />
                    </div>}
            </div>
        </div>
    );
}

export default Platforms;