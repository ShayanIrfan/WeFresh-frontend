import './style.scss';

function MobileNav({ showNav, setShowNav, list }) {

  const signUp = () => {
    setShowNav(!showNav);
    // navigate
  }

  return (
    <div className={"mobile-nav" + (showNav ? " navOn" : "")}>
      <div className='flex-space-between first-container'>
        <div>
          LOGO
        </div>
        <div>
          <button onClick={() => setShowNav(!showNav)}>X</button>
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