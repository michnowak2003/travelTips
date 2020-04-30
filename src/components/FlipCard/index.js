import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Text from "../Text";
import flipCardStyles from "./styles";

const FlipCard = () => {
  //TODO export thi query under component
  const data = useStaticQuery(graphql`
    query {
      beach: file(relativePath: { eq: "beach.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage style={flipCardStyles.container} fluid={data.beach.childImageSharp.fluid}>
      <div style={flipCardStyles.text}>
        <Text variant={"h3"} styles={flipCardStyles.text.title}>
          Bornholm
        </Text>
        <Text variant={"span"} styles={flipCardStyles.text.subtitle}>
          Porady
        </Text>
      </div>
    </BackgroundImage>
  )
}

export default FlipCard
