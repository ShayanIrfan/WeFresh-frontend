import Hero from "../../containers/Home/Hero";
import GotQuestions from "../../containers/Home/Got questions";

function Home({zIndex}) {
    return (
        <div className="Home">
            {/* <Header /> */}
            <Hero zIndex={zIndex} />
            <GotQuestions />
        </div>
    );
}

export default Home;
