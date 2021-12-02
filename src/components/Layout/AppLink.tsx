import Link, { LinkProps } from "next/link";
import React from "react";

interface AppLinkProps extends LinkProps {
  label: string;
  href: string;
}

export const AppLink: React.FC<AppLinkProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a>{label}</a>
    </Link>
  );
};
