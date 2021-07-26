import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import Sidenav from './sideNav/sidenav'


const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout">
    <Content>
      <div className="site-layout-content">
       <Sidenav />
      </div>
        </Content>
  </Layout>
);

export default App;
