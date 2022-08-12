import './style.scss';
import LogoImg from '../../../assets/images/WeFresh_logo.png';
import { ReactComponent as Close } from '../../../assets/svgs/Close.svg'

function MobileNav({ showNav, setShowNav, list, setzIndex }) {

  const signUp = () => {
    setShowNav(!showNav);
    // navigate
  }

  return (
    <div className={"mobile-nav" + (showNav ? " navOn" : "")}>
      <div className='flex-space-between first-container'>
        <div>
          <img src={LogoImg} alt="" />
        </div>
        <div>
          <button onClick={() => {setShowNav(!showNav); setzIndex(true)}}><Close /></button>
        </div>
      </div>
      <div>
        <ul>
          {list.map((v, i) => <li key={i} onClick={() => setShowNav(!showNav)}>{v}</li>)}
        </ul>
      </div>
      <div className='btn-div'>
        <button onClick={signUp}>Sign up</button>
      </div>
    </div>
  );
}

export default MobileNav;