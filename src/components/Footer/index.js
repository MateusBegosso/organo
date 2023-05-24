import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            
            <ul className="social-icons">
                    <li><img src='./images/fb.png' alt='logo facebook' /></li>
                    <li><img src='./images/tw.png' alt='logo twitter' /></li>
                    <li><img src='./images/ig.png' alt='logo instagram' /></li>
            </ul>
            <img src='./images/logo.png'/>
            <p>Desenvolvido por Mateus</p>
            
        </footer>
    )
}


export default Footer;