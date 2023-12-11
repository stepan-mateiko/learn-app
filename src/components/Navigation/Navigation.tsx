import { Link } from "react-router-dom";

interface NavigationProps {
  links: { to: string; label: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
