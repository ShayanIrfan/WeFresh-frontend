import './style.scss';

function Platforms({ playstore }) {

    return (
        <div className="platforms">
            <p>Available on</p>
            <div className="flex-center">
                <div className='first-logo'>LOGO</div>
                {playstore === "white" ?
                    <div>LOGO</div>
                    :
                    <div>LOGO Black</div>}
            </div>
        </div>
    );
}

export default Platforms;