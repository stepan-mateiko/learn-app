import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { TwitterIcon, FacebookIcon, YouTubeIcon } from "../Icon/Icon";
import { navigationLinks } from "../../constants/navigationLinks";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper-top">
        <Logo />
        <div>
          <h3>Product</h3>
          <Navigation links={navigationLinks.FOOTER_LINKS_PRODUCTS} />
        </div>
        <div>
          <h3>Resourses</h3>
          <Navigation links={navigationLinks.FOOTER_LINKS_RESOURSES} />
        </div>
        <div>
          <h3>Company</h3>
          <Navigation links={navigationLinks.FOOTER_LINKS_COMPANY} />
        </div>
        <div>
          <h3 className="footer__subscribe-title">
            Subscribe to our Newsletter
          </h3>
          <p>For product announcements and exclusive insights</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              name="subscribeEmail"
              placeholder="Input your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer__wrapper-bottom">
        <div>English</div>
        <div>
          © 2023 Learn, Inc.
          <Navigation links={navigationLinks.FOOTER_LINKS_COPYRIGHT} />
        </div>
        <div>
          <Link to={"*"}>
            <TwitterIcon />
          </Link>
          <Link to={"*"}>
            <FacebookIcon />
          </Link>
          <Link to={"*"}>
            <YouTubeIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
