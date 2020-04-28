import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import ContactC from "../components/Home/ContactC"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactC />
  </Layout>
)


export default ContactPage