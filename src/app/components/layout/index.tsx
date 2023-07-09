import Header from "./header";
import Container from "./mainContent";
import Sidebar from "./navbar/page";
import Content from "./content";
import Footer from "./footer";

import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  titleHeader?: string;
  login?: boolean;
  titleFooter?: string;
  onHeader?: boolean;
  onMainContent?: boolean;
  onFooter?: boolean;
};

export default function Layout({
  children,
  titleHeader = "",
  login = false,
  titleFooter,
  onHeader = true,
  onMainContent = true,
  onFooter = true,
}: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      {onHeader ? (
        login && titleHeader ? (
          <Header title={titleHeader} needLogin={login} />
        ) : titleHeader ? (
          <Header title={titleHeader} />
        ) : login ? (
          <Header needLogin={login} />
        ) : (
          <Header />
        )
      ) : null}
      {onMainContent ? (
        <Container>
          <Sidebar />
          <Content>{children}</Content>
        </Container>
      ) : (
        children
      )}

      {onFooter ? (
        titleFooter ? (
          <Footer title={titleFooter} />
        ) : (
          <Footer />
        )
      ) : null}
    </div>
  );
}
