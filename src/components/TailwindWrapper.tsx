import React from "react";

export const TailwindWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="tailwind-scope">{children}</div>;
};
