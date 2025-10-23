import Head from "next/head";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | M-Cart</title>
      </Head>
      <div className="container my-4">
        <h4>About Us</h4>
        <p>
          "Welcome to MCart! Founded in 2020, our mission is to provide high-quality products."
        </p>
      </div>
    </>
  );
}
