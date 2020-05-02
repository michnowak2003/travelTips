import React from "react"

import Layout from "../components/layout"
import FlipCard from "../components/FlipCard";

const mock = [
  { title: "Bornholm", type: "Porady", info: [{ name: "40 punktów" }, { name: "256km" }, { name: "5dni" }] },
  { title: "Green Velo", type: "Porady", info: [{ name: "25 punktów" }, { name: "1256km" }, { name: "10dni" }] },
  { title: "Wrocław", type: "Porady", info: [{ name: "40 punktów" }, { name: "56km" }, { name: "3dni" }] }
];
const IndexPage = () => (
  <Layout>
    <FlipCard destinations={mock}/>
  </Layout>
);

export default IndexPage
