import { useState } from 'react';
import './style.scss';
// Mobile Navbar
import MobileNav from '../../components/Header/mobile navbar';
// Desktop Navbar
import DesktopNav from '../../components/Header/desktop navbar';

function Header() {

    const [showNav, setShowNav] = useState(false);

    const navList = ["Our App", "For Business", "About us", "English"]

    return (
        <div className="header">
            {/* <div className="flex-space-around"> */}
            <div className="flex-space-between">
                <div>LOGO</div>
                {/* <DesktopNav list={navList} /> */}
                <button onClick={() => setShowNav(!showNav)}>On</button>
            </div>
            <MobileNav showNav={showNav} setShowNav={setShowNav} list={navList} />
        </div>
    );
}

export default Header;