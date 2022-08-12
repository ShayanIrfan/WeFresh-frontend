import "./style.scss";

function FooterLinks({ heading, links }) {

    return (
        <div>
            <h3>{heading}</h3>
            {links.map((v, i) => <p key={i}>{v}</p>)}
        </div>
    )
}

export default FooterLinks;