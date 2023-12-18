import React from "react";
import Layoutadmin from "./Layoutadmin";
import Sidebar from "../component/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Adminblog = () => {
  return (
    <Layoutadmin>
      <div className="d-flex mt-8">
  <Sidebar />
</div>

    </Layoutadmin>
  );
};

export default Adminblog;
