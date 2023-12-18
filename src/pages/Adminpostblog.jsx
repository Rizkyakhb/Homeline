import React from "react";
import Layoutadmin from "./Layoutadmin";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from "../component/Sidebar";

const Adminpostblog = () => {
  return (
    <Layoutadmin>
      <div className="flex mt-8">
      <Sidebar/>
      </div>
    </Layoutadmin>
  );
};

export default Adminpostblog;
