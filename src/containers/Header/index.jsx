import { useState } from 'react';
import './style.scss';
import LogoImg from '../../assets/images/WeFresh_logo.png';
import { ReactComponent as Hamburger } from '../../assets/svgs/Hamburger.svg'
// Mobile Navbar
import MobileNav from '../../components/Header/mobile navbar';
// Desktop Navbar
import DesktopNav from '../../components/Header/desktop navbar';

function Header() {

    const [showNav, setShowNav] = useState(false);

    const navList = ["Our App", "For Business", "About us", "English"]

    return (
        <div className="header">
            <div className="flex-space-around">
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