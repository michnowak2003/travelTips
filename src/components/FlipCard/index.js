import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Text from "../Text";
import "./styles.scss";

const FlipCard = ({ destinations }) => {
  //TODO export thi query under component
  const queryPage = useStaticQuery(graphql`
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

  const showInfoList = info => (
    <div className="card__back__content__info">
      <ul className="card__back__content__info__list">
        {info.map(element => (
          <li className="card__back__content__list__listItem">{element.name}</li>
        ))}
      </ul>
    </div>
  );

  return destinations.map(destination =>
    <div className="card">
      <div className="card__front">
        <BackgroundImage className="card__front__content" fluid={queryPage.beach.childImageSharp.fluid}>
          <div className="card__front__content__text">
            <Text variant={"h3"} className="card__front__content__text--title">
              {destination.title}
            </Text>
            <Text variant={"span"} className="card__front__content__text--subtitle">
              {destination.type}
            </Text>
          </div>
        </BackgroundImage>
      </div>
      <div className="card__back">
        <div className="card__back__content">
          <div className="card__back__content__title">{destination.title}</div>
          <div className="card__back__content__subtitle">{destination.type}</div>
          {destination.info && (showInfoList(destination.info))}
          <button className="card__back__content__button">Szczegóły</button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard
