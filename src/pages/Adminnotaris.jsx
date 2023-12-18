import React from "react";
import Layoutadmin from "./Layoutadmin";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from "../component/Sidebar";
import SearchBox from "../component/Searchbox";
import MyTable from "../component/Mytable";
import VerificationBox from "../component/VerificationBox";

const Adminnotaris = () => {
  return (
    <Layoutadmin>
<div className="flex mt-8">
<Sidebar/>
<div className="ml-10">
      <div>
        <p className="text-[#464255] text-3xl">Notaris</p>
        <SearchBox />
      </div>
      <div className="d-flex">
        <div className="mb-3">
          <MyTable />
        </div>
        <VerificationBox />
      </div>
    </div>
    </div>
    </Layoutadmin>
  );
};

export default Adminnotaris;
