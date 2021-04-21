import "./header.scss"
import heroImg from "../images/Group 17.1.png"
export default function Header() {

    return (
        <div className="header">
            <div className="header__hero">
                <h1 className="header__heroHeadline">
                 create your first decentralized wallet
                </h1>
                <p className="header__heroSubtitle">the easiest way to manage multiple cruptycurrencly assets</p>
                {/* eslint-disable-next-line */}
                <button onClick={() => gtag("event", "select_content", { "content_type": "CTAbutton", "test-type": "A"})} className="header__heroCTA">
                   <p>create wallet</p>

                </button>

            </div>
            <div className="header__heroImagecontainer">
                <img className="header__heroImage" src={heroImg} alt=""/>

            </div>

      
        </div>


    )

}