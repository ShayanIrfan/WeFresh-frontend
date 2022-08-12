import './style.scss';

function Input({ placeholder, btnText }) {

    return (
        <div className="input">
            <input type="text" placeholder={placeholder} />
            <button>{btnText}</button>
        </div>
    );
}

export default Input;