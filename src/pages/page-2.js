import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MapContainer from "../components/MapContainer";
import Text from "../components/Text";

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Page two"/>
      <Text variant={"h1"}>BORNHOLM</Text>
      <MapContainer
        title="Bornholm"
        src="https://www.google.com/maps/d/u/0/embed?mid=1Ye_xosFLhAxEn3AGI5jwhxqdGwgxQD22"
      />

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage
