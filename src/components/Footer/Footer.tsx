import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { TwitterIcon, FacebookIcon, YouTubeIcon } from "../Icon/Icon";
import { navigationLinks } from "../../constants/navigationLinks";

const Footer: React.FC = () => {
  return (
    <footer style={{ marginTop: 200 }}>
      <div style={{ display: "flex" }}>
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
          <h3>Subscribe to our Newsletter</h3>
          <form>
            <input type="text" name="subscribeEmail" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        <div>English</div>
        <div style={{ display: "flex" }}>
          © 2023 Learn, Inc.
          <Navigation links={navigationLinks.FOOTER_LINKS_COPYRIGHT} />
        </div>
        <div>
          <TwitterIcon />
          <FacebookIcon />
          <YouTubeIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
