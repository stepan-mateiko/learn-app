import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { TwitterIcon, FacebookIcon, YouTubeIcon } from "../Icon/Icon";
import { navigationLinks } from "../../constants/navigationLinks";
import { FOOTER } from "../../constants/text-constants";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper-top">
        <Logo />
        <div>
          <h4>{FOOTER.product}</h4>
          <Navigation links={navigationLinks.FOOTER_LINKS_PRODUCTS} />
        </div>
        <div>
          <h4>{FOOTER.resourses}</h4>
          <Navigation links={navigationLinks.FOOTER_LINKS_RESOURSES} />
        </div>
        <div>
          <h4>{FOOTER.company}</h4>
          <Navigation links={navigationLinks.FOOTER_LINKS_COMPANY} />
        </div>
        <div>
          <h4 className="footer__subscribe-title">{FOOTER.subscribeHeading}</h4>
          <p>{FOOTER.subscribeText}</p>
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
            <button type="submit">{FOOTER.subscribeButton}</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer__wrapper-bottom">
        <div>{FOOTER.language}</div>
        <div>
          {FOOTER.copyright}
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
