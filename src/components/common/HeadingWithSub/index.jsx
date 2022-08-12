import './style.scss';

function HeadingWithSub ({heading, subHeading}) {

    const GotQuestionContent = {
        heading: "Got questions?",
        subHeading: "Perfect, we've got answers"
    }

    return (
        <div className='headings'>
            <h3>{heading}</h3>
            <p>{subHeading}</p>
        </div>
    )
}

export default HeadingWithSub