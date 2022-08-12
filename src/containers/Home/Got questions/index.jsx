import './style.scss';
import HeadingWithSub from '../../../components/common/HeadingWithSub';
import Accordian from '../../../components/common/Accordian';
import { useState } from 'react';

function GotQuestions() {

    const [gotQuestionsContent, setGotQuestionsContent] = useState({
        heading: "Got questions?",
        subHeading: "Perfect, we've got answers",
        questions: [
            {
                question: "How to get started?",
                answer: {
                    title: "Lorem ipsum dolor, sit amet",
                    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, voluptatum? Minus doloribus laudantium, libero natus quas, nulla fugit molestiae assumenda quidem enim sit molestias tenetur, delectus eaque accusantium incidunt illum."
                },
                show: false
            },
            {
                question: "elit. Molestias, voluptatum? Minus doloribus",
                answer: {
                    title: "Lorem ipsum dolor, sit amet",
                    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, voluptatum? Minus doloribus laudantium, libero natus quas, nulla fugit molestiae assumenda quidem enim sit molestias tenetur, delectus eaque accusantium incidunt illum."
                },
                show: false
            },
            {
                question: "laudantium, libero natus quas",
                answer: {
                    title: "Lorem ipsum dolor, sit amet",
                    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, voluptatum? Minus doloribus laudantium, libero natus quas, nulla fugit molestiae assumenda quidem enim sit molestias tenetur, delectus eaque accusantium incidunt illum."
                },
                show: false
            },
            {
                question: "quidem enim sit molestias tenetur, delectus eaque accusantium incidunt illum.",
                answer: {
                    title: "Lorem ipsum dolor, sit amet",
                    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, voluptatum? Minus doloribus laudantium, libero natus quas, nulla fugit molestiae assumenda quidem enim sit molestias tenetur, delectus eaque accusantium incidunt illum."
                },
                show: false
            },
        ]
    });

    return (
        <div>
            <HeadingWithSub heading={gotQuestionsContent.heading} subHeading={gotQuestionsContent.subHeading} />
            <Accordian gotQuestionsContent={gotQuestionsContent} setGotQuestionsContent={setGotQuestionsContent} />
        </div>
    )
}

export default GotQuestions