import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

interface BreadcrumbProps {
  links: string[];
  labels: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ links, labels }) => {
  return (
    <div role="presentation" className="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {links.map((link, key) => (
          <Link key={key} underline="hover" color="inherit" href={link}>
            {labels[key]}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};
export default Breadcrumb;
