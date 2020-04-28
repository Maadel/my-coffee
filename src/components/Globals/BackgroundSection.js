import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage
      className="default-background"
      fluid={img}
      preserveStackingContext={true}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="inner col-12">
            <ul className="btn-list">
              <li>
                <button className="btn">click 1</button>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
            {title}
          </h1>
          {children}
          <div className="outer col-11">
            <button className="btn"> click me</button>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
