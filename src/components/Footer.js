import images from "../assets" 

const Footer = () => {
    return (
  <footer>
    <a href="https://github.com/reethd"><img className="footer-icon" src={images.gh}/></a>
    <a href="https://www.linkedin.com/in/reethdasgupta/"><img className="footer-icon" src={images.li}/></a>
</footer>
)
};

export default Footer;
