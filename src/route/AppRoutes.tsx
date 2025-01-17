import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import WatchPage from "../pages/WatchPage";
import Layout from "../Layout";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/watch" element={<WatchPage />}></Route>
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
