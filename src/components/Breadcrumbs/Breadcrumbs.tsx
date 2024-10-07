import * as React from "react";
import Link from "@mui/material/Link";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BreadcrumbProps } from "../../constants/props";

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
