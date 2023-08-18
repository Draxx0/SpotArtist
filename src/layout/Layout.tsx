import BottomMenu from "../components/BottomMenu";
import SideMenu from "../components/SideMenu";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <SideMenu />
      <main className="text-white">
        {children}
        <BottomMenu />
      </main>
    </>
  );
};

export default Layout;
