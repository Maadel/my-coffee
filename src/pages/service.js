import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import ServiceC from "../components/Home/serviceC"

const ServicePage = ({ data }) => (
  <Layout>
    <SEO title="Services" />
    <ServiceC />
  </Layout>
)


export default ServicePage