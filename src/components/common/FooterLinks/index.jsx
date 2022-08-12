import "./style.scss";

function FooterLinks({ heading, links }) {

    return (
        <div className="footer-links">
            <h3>{heading}</h3>
            {links.map((v, i) => <p key={i}>{v}</p>)}
        </div>
    )
}

export default FooterLinks;