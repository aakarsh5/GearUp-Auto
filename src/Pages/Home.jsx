import React from "react";
import Head from "../modules/head/Head";
import Flexbox from "../modules/Flexbox/Flexbox.jsx";
import Popular from "../modules/Popular/Popular.jsx";
import Newsletter from "../modules/Newsletter/Newsletter.jsx";
import Offer from "../modules/Offer/Offer.jsx";
import Collection from "../modules/Collection/Collection.jsx";

function Home() {
  return (
    <div>
      <Head />
      <Popular />
      {/* <Flexbox /> */}
      <Collection />
      <Offer />
      <center>
        <Newsletter />
      </center>
    </div>
  );
}

export default Home;
