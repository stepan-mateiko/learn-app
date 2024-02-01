import RoutePaths from "./routes";

export const navigationLinks = {
  HEADER_LINKS: [
    { to: RoutePaths.TRAINING, label: "Training" },
    { to: RoutePaths.MY_ACCOUNT, label: "My Account" },
  ],
  FOOTER_LINKS_PRODUCTS: [
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
  ],
  FOOTER_LINKS_RESOURSES: [
    { to: "/blog", label: "Blog" },
    { to: "/user-guides", label: "User Guides" },
    { to: "/webinars", label: "Webinars" },
  ],
  FOOTER_LINKS_COMPANY: [
    { to: "/about-us", label: "About Us" },
    { to: "/contact-us", label: "Contact Us" },
  ],
  FOOTER_LINKS_COPYRIGHT: [
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
  ],
};
