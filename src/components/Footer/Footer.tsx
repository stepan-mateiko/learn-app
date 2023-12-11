import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { TwitterIcon, FacebookIcon, YouTubeIcon } from "../Icon/Icon";

const Footer: React.FC = () => {
  const productNavigation = [
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
  ];
  const resoursesLinks = [
    { to: "/blog", label: "Blog" },
    { to: "/user-guides", label: "User Guides" },
    { to: "/webinars", label: "Webinars" },
  ];
  const companyLinks = [
    { to: "/about-us", label: "About Us" },
    { to: "/contact-us", label: "Contact Us" },
  ];
  const copyrightLinks = [
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
  ];
  return (
    <footer>
      <div style={{ display: "flex" }}>
        <Logo />
        <div>
          <h3>Product</h3>
          <Navigation links={productNavigation} />
        </div>
        <div>
          <h3>Resourses</h3>
          <Navigation links={resoursesLinks} />
        </div>
        <div>
          <h3>Company</h3>
          <Navigation links={companyLinks} />
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
          © 2023 Learn, Inc. <Navigation links={copyrightLinks} />
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
