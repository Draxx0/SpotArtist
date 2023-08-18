import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import ProfileMenu from "../components/ProfileMenu";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProfileMenu />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
