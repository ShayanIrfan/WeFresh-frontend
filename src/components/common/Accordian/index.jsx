import { useState } from 'react';
import './style.scss';

function Accordian({ gotQuestionsContent, setGotQuestionsContent }) {

    const [prev, setPrev] = useState();

    const toShow = (curr) => {
        let temp = gotQuestionsContent.questions;
        if (prev !== undefined) {
            temp[prev].show = false;
        }
        if (curr !== prev) {
            temp[curr].show = true;
            setPrev(curr);
        } else {
            setPrev(undefined);
        }
        setGotQuestionsContent({ ...gotQuestionsContent, questions: temp });
    }

    return (
        gotQuestionsContent.questions.map((v, i) =>
            <div key={i}>
                <div onClick={() => toShow(i)}>
                    <p>{v.question}</p>
                </div>
                {v.show &&
                    <div>
                        <p>{v.answer.title}</p>
                        <p>{v.answer.value}</p>
                    </div>
                }
            </div >
        )
    )
}

export default Accordian;