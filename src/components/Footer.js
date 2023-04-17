import images from "../assets";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/reethd">
        <img className="footer-icon" src={images.gh} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/reethdasgupta/">
        <img className="footer-icon" src={images.li} alt="linkedin" />
      </a>
    </footer>
  );
};

export default Footer;
