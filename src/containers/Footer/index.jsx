import "./style.scss";
// component import
import Platforms from "../../components/common/Platforms";
import FooterLinks from "../../components/common/FooterLinks";

function Footer() {

    const footerLinks = [
        {
            heading: "SERVICE AREA",
            links: ["Lorem ipsum dol", "Psum dolor", "Sum dolor", "Lorem ipsum"]
        },
        {
            heading: "ABOUT",
            links: ["Story of WeFresh", "Read our blog", "Sign up to deliver"]
        },
        {
            heading: "HELP",
            links: ["Help centre", "Read FAQs", "Community", "Security"]
        }
    ]

    return (
        <div className="Footer">
            {/* <div className="flex-space-around first-container"> */}
            <div className="first-container">
                <div>LOGO</div>
                {footerLinks.map((v, i) => <FooterLinks key={i} heading={v.heading} links={v.links} />)}
                <div>
                    <Platforms />
                </div>
            </div>
            <div className="copyright-section">
                <p>© 2020 &nbsp;WeFresh.&nbsp; All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer