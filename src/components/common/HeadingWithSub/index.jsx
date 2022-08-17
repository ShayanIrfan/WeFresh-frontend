import './style.scss';

function HeadingWithSub({ heading, subHeading }) {

    return (
        <div className='headings'>
            <h3>{heading}</h3>
            <p>{subHeading}</p>
        </div>
    )
}

export default HeadingWithSub