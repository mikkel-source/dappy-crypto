import "./dappy__nav.scss"
import logo from "../images/Group 33.png"
export default function DappyNav() {
    return (
        <div className="dappy__nav">
            <div className="dappy__navHeading">
                <img className="dappy__navHeadingtext" src={logo} alt=""/>
                <a className="dappy__navHeadinglinks" href="/">how it works</a>
                <a className="dappy__navHeadinglinks" href="/">blog</a>
                <a className="dappy__navHeadinglinks" href="/">support</a>
            </div>
            <div className="dappy__navSocials">
            <i class="fab fa-twitter-square dappy__navSocialsicon"></i>
            <i class="fab fa-reddit dappy__navSocialsicon"></i>
            <i class="fab fa-github-alt dappy__navSocialsicon"></i>
            <i class="fab fa-bitcoin dappy__navSocialsicon"></i>

            </div>

        </div>
    )
}