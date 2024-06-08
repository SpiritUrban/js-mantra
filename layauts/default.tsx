import React from "react";
import NavBarPanel from "@/components/organisms/NavBarPanel";
import "@/styles/globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <NavBarPanel />
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
};

export default Layout;
