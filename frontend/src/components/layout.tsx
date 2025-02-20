import React, { ReactNode, FC } from "react";
import useSWR from "swr";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <main>{children}</main>;
    </>
  );
};

export default Layout;
