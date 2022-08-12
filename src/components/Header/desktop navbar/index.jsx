import './style.scss';

function DesktopNav({ list }) {
  return (
    <div className="desktop-nav">
      <div>
        <ul className='flex-space-around'>
          {list.map((v, i) => <li key={i}>{v}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default DesktopNav;