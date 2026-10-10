import Header from "@/components/layouts/header";
import StickyRobot from "@/components/layouts/sticky-robot";
import Footer from "@/components/layouts/footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <StickyRobot />
      <Footer />
    </>
  );
}
