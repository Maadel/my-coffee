import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Vslide from "../components/Home/vslide"
import ImgSlide from "../components/Home/ImgSlide"
import Main from "../components/Home/main"
import Test2 from "../components/Home/test2"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Main" />
 <Main />
 
  </Layout>
)

export const query = graphql`
  {
    imgOne: file(relativePath: { eq: "main4.png" }) {
      childImageSharp {
        fluid(quality:100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage

/*import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      styleClass="default-background"
      img={data.img.childImageSharp.fluid}
      title="coffee corner"
    />
    <div>
      <h2 className="default-background">hi from div2</h2>
    </div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage*/
