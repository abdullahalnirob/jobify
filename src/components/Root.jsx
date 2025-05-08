import React from "react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import CompanySection from "./CompanySection";
import { Helmet } from "react-helmet";

const Root = () => {
  return (
    <div className="">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Jobify</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero />
      <CompanySection />
      <HowItWorks />
    </div>
  );
};

export default Root;
