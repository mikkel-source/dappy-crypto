import "./footer.scss"
export default function Footer() {
    return (
        <div className="footer" >
            <div className="footer__info">
                <h1 className="footer__infoHeadline">about</h1>
             <p>introducing our terms of policy</p>
                <p>privacy policy</p> 
            </div>
            <div className="footer__info">
                <h1 className="footer__infoHeadline">contact</h1>
                <p>hello@dappywallet.com</p>

            </div>
            <div className="footer__info">
                <h1 className="footer__infoHeadline">Newsletter</h1>
                <p>Please enter your e-mail if want to receive updates.</p>
                <form action="">
                    <input placeholder="your e-mail" className="footer__infoEmail" type="email"/>
                    <button className="footer__infoEmailbtn" type>subscribe</button>
                </form>
            </div>

        </div>


    )
}