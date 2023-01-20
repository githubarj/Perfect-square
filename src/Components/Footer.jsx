import "./FooterStyles.css"

const Footer = () => {
    return (
      <div className="footer">
        <div className="top">
          <div>
            <h1>PERFECT SQUARE</h1>
            <p>Trust Quality Durability</p>
          </div>
          <div>
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>Projects</h4>
            <a href="/">Construction</a>
            <a href="/">Solar panels</a>
            <a href="/">Water Drilling</a>
            <a href="/">Affiliate</a>
          </div>

          <div>
            <h4>Community</h4>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">Twitter</a>
          </div>

          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Contact us</a>
            <a href="/">Report a problem</a>
          </div>

          <div>
            <h4>Others</h4>
            <a href="/">Terms of service</a>
            <a href="/">License</a>
          </div>
        </div>
      </div>
    );
}

export default Footer;