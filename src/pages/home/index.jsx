import React from "react";
// import Header from "../../components/header";
import Jumbotron from "../../components/Jumbotron/Destination";
import PickDestination from '../../components/pickDestination'

function index() {
  return (
    <>
      {/* <Header />/ */}
      <div style={{margin: '0 40px'}}>
      <Jumbotron />
      <PickDestination/>

      </div>
    </>
  );
}

export default index;
