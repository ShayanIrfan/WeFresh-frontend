import { useState } from 'react';
import './style.scss';
import LogoImg from '../../assets/images/WeFresh_logo.png';
import { ReactComponent as Hamburger } from '../../assets/svgs/Hamburger.svg'
// Mobile Navbar
import MobileNav from '../../components/Header/mobile navbar';
// Desktop Navbar
import DesktopNav from '../../components/Header/desktop navbar';
import { useMediaQuery } from 'react-responsive';

function Header() {

    const applySpaceAround = useMediaQuery({
        query: '(min-width: 521px)'
    });

    const [showNav, setShowNav] = useState(false);

    const navList = ["Our App", "For Business", "About us", "English"]

    return (
        <div className="header">
            <div className={applySpaceAround ? "flex-space-around" : "flex-space-between"}>
                <div>
                    <img src={LogoImg} alt="" />
                </div>
                <DesktopNav className="desktop-nav" list={navList} />
                <button onClick={() => setShowNav(!showNav)}><Hamburger /></button>
            </div>
            <MobileNav className="mobile-nav" showNav={showNav} setShowNav={setShowNav} list={navList} />
        </div>
    );
}

export default Header;