import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import PhotoessayStyles from "./photoessay.module.scss"

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 1500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }
      const imageFluid = image.node.childImageSharp.fluid;
      const { positioning } = props
      return (
        <div className={`${PhotoessayStyles.image} ${PhotoessayStyles[positioning]}`}>
          <Img
            alt={props.alt}
            fluid={imageFluid}
          />
        </div>
      );
    }}
  />
)

export default Image
